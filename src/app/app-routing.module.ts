import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPagenotfoundComponent } from './app-pagenotfound/app-pagenotfound.component';


const routes: Routes = [
  {path: '404', component : AppPagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
