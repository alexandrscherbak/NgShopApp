import { NgModule } from '@angular/core';
import { DataService } from './data-service/data.service';
import { SortingService } from './sorting-service/sorting.service';

@NgModule({
	providers: [
		DataService,
		SortingService,
	]
})
export class NsaCommonModule { }
