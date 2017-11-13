import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent {
	@Input() public values: string[];
	@Input() public title: string;

	public toggleState: boolean = false;

	public onToggleState(event: MouseEvent): void {
		event.preventDefault();
		this.toggleState = !this.toggleState;
	}
}
