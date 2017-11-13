import { ProductItem, ProductBase } from './../data-service/data.model';
import { Injectable } from '@angular/core';
import { SortOption, Type } from '../filters-bar.model';

@Injectable()
export class SortingService {
	public sortBy(productBase: ProductBase, sortOption: SortOption): ProductBase {
		const [sortField, sortOrderName] = sortOption.split(' ');
		const sortOrder = sortOrderName === 'ascending' ? -1 : 1;
		const compareFn = this.compareFn.bind(this, sortField, sortOrder);
		productBase[Type.Men].productList = productBase[Type.Men].productList.sort(compareFn);
		productBase[Type.Women].productList = productBase[Type.Women].productList.sort(compareFn);
		productBase[Type.Children].productList = productBase[Type.Children].productList.sort(compareFn);
		return productBase;
	}

	private compareFn(sortField: string, sortOrder: number, a: ProductItem, b: ProductItem): number {
		if (a[sortField] === b[sortField]) {
			return 0;
		}
		return (a[sortField] > b[sortField]) ? sortOrder : sortOrder * -1;
	}
}
