import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BuildingRoutingModule} from './building-routing.module';
import {BuildComponent} from './build/build.component';
import {SharedModule} from '../../shared/shared.module'

@NgModule({
  declarations: [
    BuildComponent,
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule,
    SharedModule
  ]
})
export class BuildingModule {
}
