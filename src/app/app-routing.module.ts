import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./layout/menu/menu.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'building',
        loadChildren: () =>
          import('./page/building/building.module').then((m) => m.BuildingModule),
      },
    ]
  },
  // {
  //   path: 'building',
  //   loadChildren: () =>
  //     import('./page/building/building.module').then((m) => m.BuildingModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
