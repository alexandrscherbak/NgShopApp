import { Component, Input } from '@angular/core';

@Component({
	selector: 'colors-info',
	templateUrl: './colors-info.component.html',
	styleUrls: ['./colors-info.component.less']
})
export class ColorsInfoComponent {
	@Input() public colors: string[] = [];
}
