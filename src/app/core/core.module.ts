import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Material Imports
import { MatInputModule, MatSelectModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,


    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [


    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CoreModule { }
