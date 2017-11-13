import { ProductItem } from './../../nsa-common/data-service/data.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../nsa-common/data-service/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {
	public product: ProductItem;

	constructor(
		private dataService: DataService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		this.activatedRoute.params.subscribe(params => {
			const productId = parseInt(params['id']);
			this.dataService.getProductById(productId).subscribe((productItem: ProductItem) => {
				this.product = productItem;
				console.log(this.product);
			});
		});
	}

}
