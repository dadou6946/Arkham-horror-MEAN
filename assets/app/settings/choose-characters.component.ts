import {Component, OnInit} from "@angular/core";
import {SettingsService} from "./settings.service";


@Component({
    selector: "app-choose-characters",
    template: `        
        <h1 class="jumbotron text-center">Choix des investigateurs</h1>

        <div class="container">
			<div class="row">
				<form (ngSubmit)="onSubmit()" #playerNumberForm="ngForm">
					<div class="col-xs-3 col-xs-offset-2">
						<div>Le joueur {{this.first}} doit choisir son investigateur:  </div>
						<div class="form-group">
							<div class="form-control">
								<input type="radio" name="investigator" value="Jenny Barnes" onclick=""><span> Jenny Barnes</span>
	                        </div>
					        
				        </div>
				        <div class="form-group">
							<div class="form-control">
					            <input type="radio" name="investigator" value="Francis Sailor" onclick=""><span> Francis Sailor</span>
							</div>
				        </div>
				        <div class="form-group">
							<div class="form-control">
					            <input type="radio" name="investigator" value="Joe Diamond" onclick=""><span> Joe Diamond</span>
							</div>
				        </div>
				     	<div class="form-group">
							<div class="form-control">
				           		<input type="radio" name="investigator" value="Peggy Green" onclick=""><span> Peggy Green</span>
				        	</div>
				        </div>
				        <button type="submit" class="btn btn-default">Ok</button>
					</div>
				</form>
				<div class="col-xs-5">
		 			<div id="preview" class="center-block"></div>
				</div>
			</div>
		</div>
    `
})

export class ChooseCharactersComponent implements OnInit
{
    first : number;
    playerNumber: number;
    current : number;
    nextStep : boolean = false;

   	constructor(private settingsService: SettingsService) {}

	ngOnInit()
    {
        // Define the first player
        this.first = this.settingsService.getGameSettings('first');
        // and the number of player
        this.playerNumber = this.settingsService.getGameSettings('number');

        // console.log();
        console.log(this.settingsService.getGameSettings());
        console.log(this.settingsService.getPlayerSettings(1));
        // console.log(this.settingsService.getSettings());
    }

    onSubmit()
    {
    	console.log('soumis');
    }

}