import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';


@Component({
	selector: "app-guides-text",
	templateUrl: "./guides-text.component.html",
	encapsulation: ViewEncapsulation.None,
})

export class GuidesTextComponent implements OnInit, AfterViewInit {

	constructor(private _script: ScriptLoaderService)  {

	}

	ngOnInit()  {

	}
	
	ngAfterViewInit()  {
		
	}
}