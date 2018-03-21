import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
	selector: "app-header-profile",
	templateUrl: "./header-profile.component.html",
	encapsulation: ViewEncapsulation.None,
})

export class HeaderProfileComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService)  {

	}

	ngOnInit()  {

	}

	ngAfterViewInit()  {
		this._script.loadScripts('app-header-profile',
		['assets/app/js/header/profile.js']);
	}
}