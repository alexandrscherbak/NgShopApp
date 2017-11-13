import { Routes } from '@angular/router';
import { ProductListPageComponent } from './product-list/product-list-page/product-list-page.component';
import { ProductPageComponent } from './product/product-page/product-page.component';

export const appRoutes: Routes = [
	{
		path: '',
		component: ProductListPageComponent
	},
	{
		path: 'product/:id',
		component: ProductPageComponent
	},
	{ path: '**', redirectTo: '/' },
];
