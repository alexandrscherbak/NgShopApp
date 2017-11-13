import { SharedComponentsModule } from './../shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './product-page/product-page.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { ProductNameComponent } from './product-name/product-name.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
	imports: [
		SharedComponentsModule,
		CommonModule,
		FormsModule,
	],
	declarations: [
		ProductPageComponent,
		NavigationPanelComponent,
		ProductNameComponent,
		ProductInfoComponent,
	]
})
export class ProductModule { }
