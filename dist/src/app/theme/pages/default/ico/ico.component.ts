import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';


@Component({
selector: "app-ico",
templateUrl: "./ico.component.html",
encapsulation: ViewEncapsulation.None,
})

export class IcoComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService) {

	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		this._script.loadScripts('app-ico',
			[
				'assets/app/js/pages/ico/ico.js'
			]
		);
	}
}