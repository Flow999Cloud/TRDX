import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AssistantSettingsComponent } from './assistant-settings.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DefaultComponent } from '../../default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": AssistantSettingsComponent
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
            AssistantSettingsComponent
        ]
    }
)

export class AssistantSettingsModule  {

}