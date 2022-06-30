import { InfoColleaguePage } from './pages/info-colleague/info-colleague.page';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'colleagues', component: WelcomePage},
  {path: 'form-template', component: CreateColleaguePage},
  {path: 'form-reactive', component: CreateColleagueReactivePage},
  { path: '', pathMatch: 'full', redirectTo: 'colleagues' },
  {path: 'colleagues/:pseudo', component: InfoColleaguePage},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
