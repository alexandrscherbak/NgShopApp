import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navigation-panel',
	templateUrl: './navigation-panel.component.html',
	styleUrls: ['./navigation-panel.component.less']
})
export class NavigationPanelComponent {

	constructor(
		private router: Router,
	) { }

	public onNavigateToCatalogClicked(): void {
		this.router.navigate(['/']);
	}

}
