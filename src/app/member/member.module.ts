import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module'; 
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './users/create/create.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    UsersComponent,
    CreateComponent,
    UserListComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule

  ]
})
export class MemberModule { }
