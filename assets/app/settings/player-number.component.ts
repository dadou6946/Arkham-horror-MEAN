import {Component, OnChanges} from "@angular/core";
import {SettingsService} from "./settings.service";

@Component({
    selector: "app-player-number",
    template: `
        <h3 class="jumbotron text-center">Choix du nombre de joueurs<br>et de leurs noms</h3>
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-xs-offset-3">
                    <!--<form (ngSubmit)="onSubmit()" #playerNumberForm="ngForm">-->
                    <!--#playerNumberInput="ngModel"-->
                    <div class="form-group">
                            <label for="playerNumber">Nombre de joueurs : </label>
                            <select class="form-control"
                                    id="playerNumber"
                                    name="playerNumber"
                                    [(ngModel)]="playerNumber"
                                    (click)="changeNumberArray()">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <hr>
                        <div *ngFor="let number of playerArray" class="form-group">
                            <label for="player{{number}}Name">Nom du joueur {{number}} :</label>
                            <input type="text"
                                   class="form-control"
                                   id="player{{number}}Name"
                                   name="player{{number}}Name"
                                   required 
                                   [(ngModel)]="playerNames[number]">
                        </div>
                        <hr>
                    
                        <a (click)="addSettings()" [routerLink]="['/settings/playerResume']" class="btn btn-info">Etape suivante</a>
                    <!--</form>-->
                </div>
            </div>
        </div>
    `
})
export class PlayerNumberComponent
{
    playerNumber: number;
    playerArray: number[];
    playerNames: any[] = [];

    constructor(private settingsService: SettingsService)
    {
        this.playerNumber = 1;
        this.playerArray = [1];
    }

    changeNumberArray()
    {
        this.playerArray = [];
        for(let i=1; i<= this.playerNumber; i++)
            this.playerArray.push(i);
    }

    addSettings()
    {
        /* Create a player category into settings*/
        this.settingsService.addSettingsCategory('players');
        /* Create game category */
        this.settingsService.addSettingsCategory('game');
        /* Add Number prop */
        this.settingsService.addSettingsProperty('game', 'number', this.playerNumber);

        for(let i=0; i< this.playerNumber; i++)
        {
            let player = i+1;
            // Add settings object for each player into Players array
            this.settingsService.addSettingsProperty('players', player.toString(), {});
            // Add their name
            this.settingsService.addPlayerProperty(player.toString(), 'name', this.playerNames[player]);
        }
        // console.log(this.settingsService.getSettings());
    }
}