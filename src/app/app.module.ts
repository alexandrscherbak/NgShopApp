import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProductListModule } from './product-list/product-list.module';
import { NsaCommonModule } from './nsa-common/nsa-common.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { ProductModule } from './product/product.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes, {
			useHash: true
		}),
		ProductListModule,
		NsaCommonModule,
		SharedComponentsModule,
		ProductModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
