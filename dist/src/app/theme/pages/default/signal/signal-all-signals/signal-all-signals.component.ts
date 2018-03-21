import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
	selector: "app-signal-all-signals",
	templateUrl: "./signal-all-signals.component.html",
	encapsulation: ViewEncapsulation.None,
})

export class SignalAllSignalsComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService)  {

	}

	ngOnInit()  {

	}

	ngAfterViewInit()  {
		this._script.loadScripts(
			'app-signal-all-signals',
			[
				'//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
				'//www.amcharts.com/lib/3/plugins/export/export.min.js',
				'assets/app/js/pages/signals/all-signals.js'
			]
		);

		Helpers.loadStyles('app-signal-all-signals',
			['//www.amcharts.com/lib/3/plugins/export/export.css']
		);
	}
}