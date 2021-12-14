import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbillerComponent } from './components/ebiller/ebiller.component';
import { QuestionsComponent } from './component/questions/questions.component'

const routes: Routes = [
  {
    path:'ebiller',
    component:EbillerComponent,
  },
  {
    path:'questions',
    component:QuestionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
