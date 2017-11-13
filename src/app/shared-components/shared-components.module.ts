import { NgModule } from '@angular/core';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorsInfoComponent } from './colors-info/colors-info.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		ExpansionPanelComponent,
		ColorsInfoComponent,
		DropdownComponent,
	],
	exports: [
		ExpansionPanelComponent,
		ColorsInfoComponent,
		DropdownComponent,
	]
})
export class SharedComponentsModule { }
