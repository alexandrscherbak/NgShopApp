export type TypeOptions = {name, checked}[];
export type SortOptions = {name, selected}[];

export enum Type {
	Men = 'men',
	Women = 'women',
	Children = 'children'
}

export enum SortOption {
	PriceAscending = 'price ascending',
	PriceDescending = 'price descending',
	NameAscending = 'name ascending',
	NameDescending = 'name descending'
}

export type FilterOptions = {
	types: TypeOptions,
	sortOptions: SortOptions
};

export const FILTER_OPTIONS: FilterOptions = {
	types: [
		{name: Type.Men, checked: true},
		{name: Type.Women, checked: true},
		{name: Type.Children, checked: true},
	],
	sortOptions: [
		{name: SortOption.PriceAscending, selected: true},
		{name: SortOption.PriceDescending, selected: false},
		{name: SortOption.NameAscending, selected: false},
		{name: SortOption.NameDescending, selected: false},
	],
};
