import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignalAllSignalsComponent } from './signal-all-signals.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": SignalAllSignalsComponent
            }
        ]
    }
];

@NgModule(
    {
        imports: [
            CommonModule,RouterModule.forChild(routes),LayoutModule
        ],
        exports: [
            RouterModule
        ],
        declarations: [
            SignalAllSignalsComponent
        ]
    }
)

export class SignalAllSignalsModule  {

}