import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { todopage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: todopage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPageRoutingModule {}
