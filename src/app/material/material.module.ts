import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';


const material = [
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule,
   MatSidenavModule,
   MatListModule,
   MatCardModule,
   MatGridListModule,
   MatDialogModule,
   MatProgressSpinnerModule,
   MatSnackBarModule,
   MatExpansionModule
]

@NgModule({
  imports: [
    material
  ],
  exports:[material]
})
export class MaterialModule { }
