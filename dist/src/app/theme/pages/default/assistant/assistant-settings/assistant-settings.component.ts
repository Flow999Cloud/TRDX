import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
	selector: "app-assistant-settings",
	templateUrl: "./assistant-settings.component.html",
	encapsulation: ViewEncapsulation.None,
})


export class AssistantSettingsComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService)  {

	}

	ngOnInit()  {

	}

	ngAfterViewInit()  {
		this._script.loadScripts('app-assistant-settings',
			[
				'assets/app/js/pages/assistants/settings.js'
			]
		);
	}
}