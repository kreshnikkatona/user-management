import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CreateComponent } from './users/create/create.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: 'edit/:id', component: CreateComponent, outlet: 'side-sheet' },
      { path: 'create', component: CreateComponent, outlet: 'side-sheet' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
