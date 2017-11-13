import { ProductBase, ProductItem, ProductList } from './../../nsa-common/data-service/data.model';
import { DataService } from './../../nsa-common/data-service/data.service';
import { Component, OnInit } from '@angular/core';
import { FILTER_OPTIONS, FilterOptions } from '../../nsa-common/filters-bar.model';
import { SortingService } from '../../nsa-common/sorting-service/sorting.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product-list-page',
	templateUrl: './product-list-page.component.html',
	styleUrls: ['./product-list-page.component.less']
})
export class ProductListPageComponent implements OnInit {
	public productBase: ProductBase;
	public filterOptions: FilterOptions = FILTER_OPTIONS;

	constructor(
		private dataService: DataService,
		private sortingService: SortingService,
		private router: Router,
	) { }

	public ngOnInit(): void {
		this.dataService.getProductBase().subscribe((productBase: ProductBase) => {
			this.productBase = this.sortingService.sortBy(productBase, this.filterOptions.sortOptions.find(sortOption => sortOption.selected).name);
		});
	}

	public onSortOptionChanged(): void {
		const selectedSortOption = this.filterOptions.sortOptions.find(sortOption => sortOption.selected).name;
		this.productBase = this.sortingService.sortBy(this.productBase, selectedSortOption);
	}

	public onProductItemClicked(id: number): void {
		this.router.navigate(['/product', id]);
	}

}
