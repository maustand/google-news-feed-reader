import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Imports
import { MatAutocompleteModule,
   MatCardModule,
   MatFormFieldModule,
   MatIconModule,
   MatInputModule,
   MatSelectModule,
   MatToolbarModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,


    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,

  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,

    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ]
})
export class CoreModule { }
