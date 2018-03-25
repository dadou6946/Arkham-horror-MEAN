import {Routes} from "@angular/router";

import {PlayerNumberComponent} from "./player-number.component";
import {PlayerResumeComponent} from "./player-resume.component";
import {ChooseCharactersComponent} from "./choose-characters.component";

export const SETTINGS_ROUTES: Routes = [
    { path:'', redirectTo: 'playerNumber', pathMatch: 'full' },
    { path:'playerNumber', component: PlayerNumberComponent },
    { path:'playerResume', component: PlayerResumeComponent},
    { path:'chooseCharacters', component: ChooseCharactersComponent}
];