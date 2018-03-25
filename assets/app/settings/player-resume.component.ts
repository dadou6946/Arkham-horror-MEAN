import {Component, OnInit} from "@angular/core";
import {SettingsService} from "./settings.service";

@Component({
    selector: "app-player-resume",
    template: `
        <h1 class="jumbotron text-center">Tirage au sort <br> du premier joueur</h1>
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-xs-offset-3">
                    <div class="col-md-6 col-md-offset-3">
                        <hr>
                        <ul>
                            <li *ngFor="let number of playerNumbers">
                                <span>Joueur {{number}} : {{this.settingsService.getSettings()['players'][number].name}}</span>
                                <br>
                            </li>
                        </ul>
                        <hr>
                        <div>
                            <span>Le premier qui commencera sera le joueur {{this.first}} : {{ this.settingsService.getSettings()['players'][this.first].name }}</span>
                        </div>
                        <br>
                        <a [routerLink]="['/settings/chooseCharacters']" class="btn btn-info">Choisir les investigateurs</a>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class PlayerResumeComponent implements OnInit
{

    first : number;
    playerNumber: number;
    playerNumbers: number[]=[];

    constructor(private settingsService: SettingsService){}

    ngOnInit()
    {
        // Define the number of player
        this.playerNumber = this.settingsService.getSettings()['game']['number'];
        // Create an array with the number of each players
        for(let i=1; i<= this.playerNumber; i++)
            this.playerNumbers.push(i);
        // Define the first player
        this.first = this.settingsService.rand(1,this.playerNumber);
        this.settingsService.addSettingsProperty('game', 'first', this.first);
    }

}