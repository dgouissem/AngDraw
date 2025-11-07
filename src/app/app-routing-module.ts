import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDessinInformation } from './page-dessin-information/page-dessin-information';

const routes: Routes = [
  { path: "", redirectTo: "dessinInfo", pathMatch:'full' },
  { path: "dessinInfo", component: PageDessinInformation },
  { path: "**", redirectTo: "dessinInfo", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
