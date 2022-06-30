import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildComponent} from './build/build.component'

const routes: Routes = [
  {
    path: 'build',
    component: BuildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule {
}
