import { FirebaseService } from '../../../share/firestore/firebase.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private fbService: FirebaseService) {}

  ngOnInit(): void {}

  addItem(form: NgForm): void {
    this.fbService
      .createLandingItem(form.value, this.imageFile)
      .subscribe(() => {
        form.resetForm();
        this.imageUrl = null;
      });
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
