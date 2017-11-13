import { SharedComponentsModule } from './../shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { TypeCheckboxesPanelComponent } from './type-checkboxes-panel/type-checkboxes-panel.component';
import { SortingPanelComponent } from './sorting-panel/sorting-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

@NgModule({
	imports: [
		SharedComponentsModule,
		CommonModule,
		FormsModule,
	],
	declarations: [
		ProductListPageComponent,
		FiltersBarComponent,
		TypeCheckboxesPanelComponent,
		SortingPanelComponent,
		ProductItemComponent,
		ProductCarouselComponent,
	]
})
export class ProductListModule { }
