import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExploreComponent } from './components/explore/explore.component';
import { MainComponent } from './components/main/main.component';
import { ProductCrudComponent } from './products/product-crud/product-crud.component';
import { HomeComponent } from './components/template/home/home.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "products",
    component: ProductCrudComponent

  },
  {
    path: "products/product-create",
    component: ProductCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
