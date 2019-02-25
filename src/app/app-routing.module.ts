import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageoneComponent } from './base/pageone/pageone.component';
import { PagetwoComponent } from './base/pagetwo/pagetwo.component';
import { PagethreeComponent } from './base/pagethree/pagethree.component';

const routes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'pageone', component: PageoneComponent },
  { path: 'pagetwo', component: PagetwoComponent },
  { path: 'pagethree', component: PagethreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
