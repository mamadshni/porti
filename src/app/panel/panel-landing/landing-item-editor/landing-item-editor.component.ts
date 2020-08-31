import { LandingCardInterface } from './../../../share/landing/landing-card.interface';
import { FirebaseService } from '../../../share/firestore/firebase.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
// tslint:disable:typedef
// tslint:disable:component-selector

@Component({
  selector: 'landing-item-editor',
  templateUrl: './landing-item-editor.component.html',
  styleUrls: [ './landing-item-editor.component.scss' ]
})
export class LandingItemEditorComponent implements OnInit {
  imageUrl: any;
  imageFile: File;
  isEditMode = false;

  oldEditedImage: any;
  EditedItemId: string = null;
  ItemForm: FormGroup;

  constructor(
    private fbService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ItemForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      imageAdr: new FormControl(null, Validators.required),
      summery: new FormControl(null, Validators.required)
    });

    this.route.data.subscribe((data: Data) => {
      const landingItem: LandingCardInterface = data.landing;
      if (landingItem) {
        this.isEditMode = true;
        this.EditedItemId = landingItem.id;

        this.ItemForm.patchValue({
          title: landingItem.title,
          summery: landingItem.summery
        });

        this.imageUrl = this.oldEditedImage = landingItem.imageUrl;

        this.ItemForm.get('imageAdr').setValidators(Validators.nullValidator);
      }
    });
  }

  submitForm(): void {
    if (this.isEditMode) {
      if (this.imageFile) {
        this.editItemWithPhoto();
      } else {
        this.EditItemNormal();
      }
    } else {
      this.addItem();
    }
  }

  EditItemNormal(): void {
    this.fbService
      .updateLanding(this.EditedItemId, this.ItemForm.value, this.imageUrl)
      .subscribe(() => {
        this.router.navigate([ 'panel', 'landing', 'viewAll' ]);
      });
  }

  editItemWithPhoto(): void {
    this.fbService
      .updateImageLanding(
        this.EditedItemId,
        this.ItemForm.value,
        this.imageFile,
        this.oldEditedImage
      )
      .subscribe(() => {
        this.router.navigate([ 'panel', 'landing', 'viewAll' ]);
      });
  }

  addItem(): void {
    this.fbService
      .createLandingItem(this.ItemForm.value, this.imageFile)
      .subscribe(() => {
        this.restForm();
        this.imageUrl = null;
      });
  }

  restForm(): void {
    this.ItemForm.reset();

    this.ItemForm.get('title').clearValidators();
    this.ItemForm.get('title').updateValueAndValidity();
    this.ItemForm.get('imageAdr').clearValidators();
    this.ItemForm.get('imageAdr').updateValueAndValidity();
    this.ItemForm.get('summery').clearValidators();
    this.ItemForm.get('summery').updateValueAndValidity();
  }

  handleImage(fileList: FileList) {
    const file = fileList[0];

    if (file.type.match(/image\/*/) == null) {
      console.error('wrong type');
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.imageUrl = reader.result;
    };

    this.imageFile = file;
  }
}
