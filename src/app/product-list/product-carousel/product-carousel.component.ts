import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ProductList } from '../../nsa-common/data-service/data.model';

@Component({
	selector: 'product-carousel',
	templateUrl: './product-carousel.component.html',
	styleUrls: ['./product-carousel.component.less']
})
export class ProductCarouselComponent implements AfterViewInit {
	@Input() public productList: ProductList;
	@Input() public headerAlignLeft: boolean = false;

	@Output() public productItemClicked: EventEmitter<number> = new EventEmitter<number>();

	public pagesAmount: number = 1;
	public currentPage: number = 1;

	public amount: number = 0;
	public visibleItemsCount: number = 0;
	public margin: number = 0;
	public lastPageMargin: number = 0;
	private itemsOnLastPage: number = 0;

	public ngAfterViewInit(): void {
		setTimeout(() => {
			const itemWidth = document.querySelector('product-item').clientWidth;
			this.calculatePages(itemWidth);
			window.addEventListener('resize', () => this.calculatePages(itemWidth));
		}, 0);
	}

	private calculatePages(itemWidth: number): void {
		const containerWidth = document.querySelector('product-carousel').clientWidth;
		this.visibleItemsCount = Math.floor(containerWidth / itemWidth);
		const freeWidth = containerWidth % itemWidth;
		const spaceBetween = freeWidth / this.visibleItemsCount - 1;
		this.margin = spaceBetween / 2;
		this.pagesAmount = Math.ceil(this.productList.productList.length / this.visibleItemsCount);

		this.itemsOnLastPage = this.productList.productList.length % this.visibleItemsCount;
		if (this.itemsOnLastPage) {
			const freeWidth = (containerWidth % itemWidth) + (this.visibleItemsCount - this.itemsOnLastPage) * itemWidth;
			const spaceBetween = freeWidth / this.itemsOnLastPage;
			this.lastPageMargin = spaceBetween / 2;
		}
	}

	public getMargin(index: number): string {
		if ((this.productList.productList.length - index) <= this.itemsOnLastPage) {
			return `${this.lastPageMargin}px`;
		} else {
			return `${this.margin}px`;
		}
	}

	public scroll(forward: boolean, elem: any): number {
		if ((forward && this.currentPage === this.pagesAmount) || (!forward && this.currentPage === 1)) {
			return;
		}
		this.currentPage += forward ? 1 : -1;
		this.amount = -(this.calcScroll(elem));
	}

	private calcScroll(elem: any): number {
		let counter = 0;
		const containerWidth = document.querySelector('product-carousel').clientWidth;
		for (let i = this.currentPage - 1; i > 0; i--) {
			counter += containerWidth;
		}
		return counter;
	}

	public onProductItemClicked(id: number): void {
		this.productItemClicked.emit(id);
	}
}
