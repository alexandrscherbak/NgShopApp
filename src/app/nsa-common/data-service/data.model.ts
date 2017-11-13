export class ProductItem {
	public id: number;
	public name: string;
	public price: number;
	public sizes?: string[];
	public colors: string[];
	public image: string;

	constructor(responseObject: any) {
		this.id = responseObject.id;
		this.name = responseObject.name;
		this.price = responseObject.price;
		this.sizes = responseObject.sizes;
		this.colors = responseObject.colors;
		this.image = responseObject.image;
	}
}

export class ProductList {
	public productList: ProductItem[] = [];
	public title: string;

	constructor(title: string) {
		this.title = title;
	}
}

export class ProductBase {
	public men: ProductList;
	public women: ProductList;
	public children: ProductList;

	constructor(responseObject: {products: any[]}) {
		this.men = new ProductList('men');
		this.women = new ProductList('women');
		this.children = new ProductList('children');
		responseObject.products.forEach((productItem: {type: any[]}) => {
			productItem.type.forEach(type => {
				(this[type] as ProductList).productList.push(new ProductItem(productItem));
			});
		});
	}
}
