import {NgModule, ApplicationRef} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";

// for angular google maps
import {CommonModule} from "@angular/common";
import {AgmCoreModule} from "angular2-google-maps/core";

import {allAppComponents, appRoutingProviders, routing} from "./app.routes";

const moduleDeclarations = [AppComponent];

@NgModule({
	imports:      [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing, CommonModule, AgmCoreModule.forRoot({
		apiKey: 'AIzaSyCQcLemUhUYrUpLF_G3EJ_AoFTN-YXtfp4',
		libraries: ["places"]
	})],
	declarations: [...moduleDeclarations, ...allAppComponents],
	bootstrap:    [AppComponent],
	providers:    [appRoutingProviders]
})
export class AppModule {}