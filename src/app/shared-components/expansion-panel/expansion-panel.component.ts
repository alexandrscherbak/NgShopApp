import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'expansion-panel',
	templateUrl: './expansion-panel.component.html',
	styleUrls: ['./expansion-panel.component.less']
})
export class ExpansionPanelComponent {
	@Input() public values: string[];
	@Input() public selectedValue: string;
	@Output() public valueSelected: EventEmitter<string> = new EventEmitter<string>();

	public toggleState: boolean = false;

	public onToggleState(): void {
		this.toggleState = !this.toggleState;
	}

	public onSelectValue(value: string): void {
		this.toggleState = false;
		this.valueSelected.emit(value);
	}

}
