import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
	selector: "app-signal-settings",
	templateUrl: "./signal-settings.component.html",
	encapsulation: ViewEncapsulation.None,
})

export class SignalSettingsComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService)  {

	}

	ngOnInit()  {

	}

	ngAfterViewInit()  {
		this._script.loadScripts('app-signal-settings',
			[
				'assets/app/js/pages/signals/settings.js'
			]
		);
	}
}