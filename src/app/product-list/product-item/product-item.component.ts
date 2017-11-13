import { ProductItem } from './../../nsa-common/data-service/data.model';
import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements AfterViewInit {
	@Input() public product: ProductItem;
	public imageUrl: string;

	public ngAfterViewInit(): void {
		setTimeout(() => this.imageUrl = `data:image/png;base64,${this.product.image}`, 0);
	}
}
