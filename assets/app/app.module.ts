import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppComponent } from "./app.component";
import {PlayerNumberComponent} from "./settings/player-number.component";
import {PlayerResumeComponent} from "./settings/player-resume.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {HomeComponent} from "./settings/home.component";
import {SettingsComponent} from "./settings/settings.component";
import {ChooseCharactersComponent} from "./settings/choose-characters.component";

@NgModule({
    declarations: [
        AppComponent,
        ChooseCharactersComponent,
        HeaderComponent,
        HomeComponent,
        PlayerResumeComponent,
        PlayerNumberComponent,
        SettingsComponent
    ],
    imports: [BrowserModule, FormsModule, routing ],
    bootstrap: [AppComponent]
})
export class AppModule {

}