import { ProductItem } from './../../nsa-common/data-service/data.model';
import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'product-info',
	templateUrl: './product-info.component.html',
	styleUrls: ['./product-info.component.less']
})
export class ProductInfoComponent implements AfterViewInit {
	@Input() public product: ProductItem;

	public imageUrl: string;

	public ngAfterViewInit(): void {
		setTimeout(() => this.imageUrl = `data:image/png;base64,${this.product.image}`, 0);
	}

}
