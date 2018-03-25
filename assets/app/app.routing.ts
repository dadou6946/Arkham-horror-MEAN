import {Routes, RouterModule } from "@angular/router";

import {HomeComponent} from "./settings/home.component";
import {SettingsComponent} from "./settings/settings.component";
import {SETTINGS_ROUTES} from "./settings/settings.routes";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'settings', component: SettingsComponent, children: SETTINGS_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);