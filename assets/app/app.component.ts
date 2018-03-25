import { Component } from '@angular/core';
import {SettingsService} from "./settings/settings.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [SettingsService],
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private settingsService: SettingsService){}
}