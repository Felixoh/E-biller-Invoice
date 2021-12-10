import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbillerComponent } from './components/ebiller/ebiller.component';

const routes: Routes = [
  {
    path:'ebiller',
    component:EbillerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
