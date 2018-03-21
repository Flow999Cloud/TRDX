import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
	selector: "app-assistant-all-trades",
	templateUrl: "./assistant-all-trades.component.html",
	encapsulation: ViewEncapsulation.None,
})

export class AssistantAllTradesComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService)  {

	}

	ngOnInit()  {

	}

	ngAfterViewInit() {
		this._script.loadScripts('app-assistant-all-trades',
			[
				'//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
				'//www.amcharts.com/lib/3/plugins/export/export.min.js',
				'assets/app/js/pages/assistants/overview.js']);

		Helpers.loadStyles('app-index',
			['//www.amcharts.com/lib/3/plugins/export/export.css']
		);
	}
}