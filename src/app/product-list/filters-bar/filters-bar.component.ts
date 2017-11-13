import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterOptions } from '../../nsa-common/filters-bar.model';

@Component({
	selector: 'filters-bar',
	templateUrl: './filters-bar.component.html',
})
export class FiltersBarComponent {
	@Input() public filterOptions: FilterOptions;
	@Output() public sortOptionChanged: EventEmitter<void> = new EventEmitter<void>();

	public onSortOptionChanged(): void {
		this.sortOptionChanged.emit();
	}
}
