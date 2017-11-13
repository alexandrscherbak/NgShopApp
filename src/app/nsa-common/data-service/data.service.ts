import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ProductBase, ProductItem } from './data.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	constructor(
		private http: HttpClient,
	) { }

	public getProductBase(): Observable<ProductBase> {
		return this.http.get('http://localhost:8000/getallproducts')
			.map((productBaseResponse: {products: any[]}) => new ProductBase(productBaseResponse));
	}

	public getProductById(id: number): Observable<ProductItem> {
		return this.http.get(`http://localhost:8000/getproductbyid?id=${id}`)
			.map(productItemResponse => new ProductItem(productItemResponse));
	}
}
