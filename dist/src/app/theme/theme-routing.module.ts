import {NgModule} from '@angular/core';
import { ThemeComponent } from './theme.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {
                "path": "guides\/text",
                "loadChildren": ".\/pages\/default\/guides\/guides-text\/guides-text.module#GuidesTextModule"
            },
            {
                "path": "guides\/video",
                "loadChildren": ".\/pages\/default\/guides\/guides-video\/guides-video.module#GuidesVideoModule"
            },
            {
                "path": "signal\/all-signals",
                "loadChildren": ".\/pages\/default\/signal\/signal-all-signals\/signal-all-signals.module#SignalAllSignalsModule"
            },
            {
                "path": "signal\/settings",
                "loadChildren": ".\/pages\/default\/signal\/signal-settings\/signal-settings.module#SignalSettingsModule"
            },
            {
                "path": "ico",
                "loadChildren": ".\/pages\/default\/ico\/ico.module#IcoModule"
            },
            {
                "path": "assistant\/all-trades",
                "loadChildren": ".\/pages\/default\/assistant\/assistant-all-trades\/assistant-all-trades.module#AssistantAllTradesModule"
            },
            {
                "path": "assistant\/settings",
                "loadChildren": ".\/pages\/default\/assistant\/assistant-settings\/assistant-settings.module#AssistantSettingsModule"
            },
            {
                "path": "affiliate",
                "loadChildren": ".\/pages\/default\/affiliate\/affiliate.module#AffiliateModule"
            },
            {
                "path": "header\/actions",
                "loadChildren": ".\/pages\/default\/header\/header-actions\/header-actions.module#HeaderActionsModule"
            },
            {
                "path": "header\/profile",
                "loadChildren": ".\/pages\/default\/header\/header-profile\/header-profile.module#HeaderProfileModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ThemeRoutingModule {}