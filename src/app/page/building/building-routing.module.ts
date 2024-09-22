import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildComponent} from './build/build.component'
import {DragDropComponent} from "./drag-drop/drag-drop.component";
import {ViewDataComponent} from "./view-data/view-data.component";

const routes: Routes = [
  {
    path: 'build',
    component: BuildComponent
  },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'view-data', component: ViewDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule {
}
