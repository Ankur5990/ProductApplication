import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { ProductListComponent } from './Product/productlist.component';

const routes : Routes = [
	{	path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{	path: 'home',
		component: HomeComponent
	},
	{
		path: 'prouctlist',
		component: ProductListComponent
	}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}

export const RoutedComponent = [HomeComponent, ProductListComponent];