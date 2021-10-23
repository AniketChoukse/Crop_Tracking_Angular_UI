import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from "@angular/material/badge";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card"
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule } from "@angular/material/slider";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTreeModule } from "@angular/material/tree";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  exports: [
   // FlexLayoutModule,
    MatBadgeModule, MatGridListModule, MatCardModule, MatIconModule, MatPaginatorModule, MatTableModule, MatButtonModule,
    MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatSortModule, 
    MatDialogModule, 
    MatSnackBarModule, 
    MatStepperModule, MatToolbarModule,
    MatMenuModule, CdkTableModule, DragDropModule, MatTooltipModule, MatSelectModule, 
    MatSlideToggleModule, MatExpansionModule, MatNativeDateModule,
    MatRadioModule, MatTabsModule, MatListModule, MatAutocompleteModule, 
    MatProgressSpinnerModule, MatTreeModule,MatDatepickerModule, MatFormFieldModule,
  FormsModule, MatSliderModule, MatRippleModule, MatSidenavModule, MatProgressBarModule,  MatChipsModule, MatDividerModule,/*FlexLayoutModule,*/],
  providers: [
  ]
})
export class MaterialModule {}
