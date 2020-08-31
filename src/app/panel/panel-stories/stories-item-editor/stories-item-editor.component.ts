import { StoryCardInterface } from './../../../share/stories/story-card.interface';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/share/firestore/firebase.service';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { LandingCardInterface } from 'src/app/share/landing/landing-card.interface';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

const customColor = [
  '#000000',
  '#e60000',
  '#ff9900',
  '#ffff00',
  '#008a00',
  '#0066cc',
  '#9933ff',
  '#ffffff',
  '#facccc',
  '#ffebcc',
  '#ffffcc',
  '#cce8cc',
  '#cce0f5',
  '#ebd6ff',
  '#bbbbbb',
  '#f06666',
  '#ffc266',
  '#ffff66',
  '#66b966',
  '#66a3e0',
  '#c285ff',
  '#888888',
  '#a10000',
  '#b26b00',
  '#b2b200',
  '#006100',
  '#0047b2',
  '#6b24b2',
  '#444444',
  '#5c0000',
  '#663d00',
  '#666600',
  '#003700',
  '#002966',
  '#3d1466',
  '#0f0f11',
  '#201d1d',
  '#2f303a',
  '#3a4c5a',
  '#9a9ce7'
];

@Component({
  selector: 'app-stories-item-editor',
  templateUrl: './stories-item-editor.component.html',
  styleUrls: [ './stories-item-editor.component.scss' ]
})
export class StoriesItemEditorComponent implements OnInit {
  imageUrl: any;
  imageFile: File;
  isEditMode = false;

  oldEditedImage: any;
  EditedItemId: string = null;
  ItemForm: FormGroup;

  readonly separatorKeysCodes: number[] = [ ENTER, COMMA ];
  categories: string[] = [ 'test' ];

  quillModules = {
    toolbar: [
      [ 'bold', 'italic', 'underline' ],

      [ { list: 'ordered' }, { list: 'bullet' } ],
      [ { direction: 'rtl' } ],

      [ { size: [ 'small', false, 'large', 'huge' ] } ],

      [
        {
          color: customColor
        },
        { background: customColor }
      ],

      [ { font: [] } ],
      [ { align: [] } ],

      [ 'clean' ]
    ]
  };

  constructor(
    private fbService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ItemForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      imageAdr: new FormControl(null, Validators.required),
      summery: new FormControl(null, Validators.required),
      story: new FormControl(null, Validators.required),
      categories: new FormControl(this.categories, Validators.required)
    });

    this.ItemForm.controls.categories.setValue(this.categories);

    this.route.data.subscribe((data: Data) => {
      const storyItem: StoryCardInterface = data.story;
      if (storyItem) {
        this.isEditMode = true;
        this.EditedItemId = storyItem.id;

        this.ItemForm.patchValue({
          title: storyItem.title,
          summery: storyItem.summery,
          story: storyItem.story,
          categories: storyItem.categories
        });

        this.categories = storyItem.categories;

        this.imageUrl = this.oldEditedImage = storyItem.imageUrl;
        this.ItemForm.get('imageAdr').setValidators(Validators.nullValidator);
      }
    });
  }

  submitForm(): void {
    this.ItemForm.controls.categories.markAsTouched();
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

  restForm(): void {
    this.ItemForm.reset();

    this.ItemForm.get('title').clearValidators();
    this.ItemForm.get('title').updateValueAndValidity();
    this.ItemForm.get('imageAdr').clearValidators();
    this.ItemForm.get('imageAdr').updateValueAndValidity();
    this.ItemForm.get('summery').clearValidators();
    this.ItemForm.get('summery').updateValueAndValidity();
    this.ItemForm.get('story').clearValidators();
    this.ItemForm.get('story').updateValueAndValidity();
    this.ItemForm.get('categories').clearValidators();
    this.ItemForm.get('categories').updateValueAndValidity();

    this.imageUrl = null;
    this.categories = [];
    this.ItemForm.controls.categories.setValue(this.categories);
  }

  EditItemNormal(): void {
    this.fbService
      .updateStory(this.EditedItemId, this.ItemForm.value, this.imageUrl)
      .subscribe(() => {
        this.router.navigate([ 'panel', 'stories', 'viewAll' ]);
      });
  }

  editItemWithPhoto(): void {
    this.fbService
      .updateImageStory(
        this.EditedItemId,
        this.ItemForm.value,
        this.imageFile,
        this.oldEditedImage
      )
      .subscribe(() => {
        this.router.navigate([ 'panel', 'stories', 'viewAll' ]);
      });
  }

  addItem(): void {
    this.fbService
      .createStorieItem(this.ItemForm.value, this.imageFile)
      .subscribe(() => {
        this.restForm();
      });
  }

  handleImage(fileList: FileList): void {
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

  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (value.trim() !== '') {
      this.ItemForm.controls.categories.setErrors(null);
      const tempCategories = this.ItemForm.controls.categories.value;
      tempCategories.push(value.trim());
      this.ItemForm.controls.categories.setValue(tempCategories);

      if (this.ItemForm.controls.categories.valid) {
        // 4
        this.ItemForm.controls.categories.markAsDirty();
        input.value = '';
      } else {
        const index = this.categories.findIndex(
          (value1) => value1 === value.trim()
        );
        if (index !== -1) {
          this.categories.splice(index, 1);
        }
      }
    } else {
      this.ItemForm.controls.categories.updateValueAndValidity();
    }
  }

  removeChip(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
    this.ItemForm.controls.categories.updateValueAndValidity();
    this.ItemForm.controls.categories.markAsDirty();
  }
}
