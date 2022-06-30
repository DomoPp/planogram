import {NgModule} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';

const materialModules = [
  MatSliderModule,
  MatFormFieldModule,
  MatGridListModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatTooltipModule,
  DragDropModule,
  MatIconModule,
  MatToolbarModule
]

@NgModule({

  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {
}
