import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BuildingRoutingModule} from './building-routing.module';
import {BuildComponent} from './build/build.component';
import {SharedModule} from '../../shared/shared.module'
import {DragDropComponent} from "./drag-drop/drag-drop.component";
import {FormsModule} from "@angular/forms";
import { ViewDataComponent } from './view-data/view-data.component';

@NgModule({
  declarations: [
    BuildComponent,
    DragDropComponent,
    ViewDataComponent
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BuildingModule {
}
