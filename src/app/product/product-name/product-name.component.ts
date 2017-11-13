import { Component, Input } from '@angular/core';

@Component({
	selector: 'product-name',
	templateUrl: './product-name.component.html',
	styleUrls: ['./product-name.component.less']
})
export class ProductNameComponent {
	@Input() public name: string;
}
