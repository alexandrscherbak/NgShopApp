import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SortOptions } from '../../nsa-common/filters-bar.model';

@Component({
	selector: 'sorting-panel',
	templateUrl: './sorting-panel.component.html',
	styleUrls: ['./sorting-panel.component.less']
})
export class SortingPanelComponent implements OnInit {
	@Input() public sortOptions: SortOptions;
	@Output() public sortOptionChanged: EventEmitter<void> = new EventEmitter<void>();

	public sortOptionsNames: string[];
	public selectedValue: string;

	public ngOnInit(): void {
		this.sortOptionsNames = this.sortOptions.map(sortOption => sortOption.name);
		this.selectedValue = this.sortOptions.find(sortOption => sortOption.selected).name;
	}

	public onValueSelected(selectedValue: string): void {
		if (selectedValue !== this.selectedValue) {
			this.selectedValue = selectedValue;
			this.sortOptions.forEach(sortOption => {
				if (sortOption.selected) {
					sortOption.selected = !sortOption.selected;
				}
				if (sortOption.name === selectedValue) {
					sortOption.selected = true;
				}
			});
			this.sortOptionChanged.emit();
		}
	}

}
