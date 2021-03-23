import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'member',
    loadChildren: () => import('./member/member.module').then(m => m.MemberModule)
  },
  { path: "", component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: "**", component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
