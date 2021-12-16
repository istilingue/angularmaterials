import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/template/home/home.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {path: "explore",
  component:ExploreComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
