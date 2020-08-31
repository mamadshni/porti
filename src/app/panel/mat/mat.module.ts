import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule
  ]
})
export class MatModule {}
