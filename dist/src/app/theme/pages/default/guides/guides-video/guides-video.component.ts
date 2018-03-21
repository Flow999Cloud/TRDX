import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
	selector: "app-guides-video",
	templateUrl: "./guides-video.component.html",
	encapsulation: ViewEncapsulation.None,
})

export class GuidesVideoComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService)  {

	}

	ngOnInit()  {

	}

	ngAfterViewInit()  {

	}
}