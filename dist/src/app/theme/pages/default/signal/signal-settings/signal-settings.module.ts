import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignalSettingsComponent } from './signal-settings.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": SignalSettingsComponent
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
            SignalSettingsComponent
        ]
    }
)

export class SignalSettingsModule  {

}