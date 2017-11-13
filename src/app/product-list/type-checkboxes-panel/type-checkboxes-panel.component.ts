import { Component, Input } from '@angular/core';
import { TypeOptions } from '../../nsa-common/filters-bar.model';

@Component({
	selector: 'type-checkboxes-panel',
	templateUrl: './type-checkboxes-panel.component.html',
	styleUrls: ['./type-checkboxes-panel.component.less']
})
export class TypeCheckboxesPanelComponent {
	@Input() public typeCheckboxesOptions: TypeOptions;

	public onSelectAllClicked(): void {
		this.typeCheckboxesOptions.forEach(option => option.checked = true);
	}

}
