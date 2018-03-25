import { Setting } from "./setting.model";
import { Injectable } from '@angular/core';

@Injectable()

export class SettingsService{

    private settings: Setting[] = [];
    constructor(){}

    //  SETTERS

    /* Add settings categories like player, monsters, map...
    *  @category : string = wanted name for category */
    addSettingsCategory(category: string)
    {
        this.settings[category] = [];
    }

    /* Add settings
    * @category : string = main settings category like game, players, investigators..
    * @secondCategory : string = name of the property to add
    * @value : any = its value */
    addSettingsProperty(category: string, secondCategory: string, value: any)
    {
        // if(secondCategory)
            this.settings[category][secondCategory]= value;
        // else
        //     this.settings[category][value]= {};
    }

    /* Add a new value for a property of player array
    *   @player : string = player number
    *   @property : string = property to add
    *   @value : any = its value */
    addPlayerProperty(player: string, property: string, value: any)
    {
        this.settings["players"][player][property] =  value;
    }

    //  GETTERS

    /* Get all settings */
    getSettings()
    {
        return this.settings;
    }

    /* Get settings for a player
    * @number : number = wanted player
    * */
    getPlayerSettings(number: number)
    {
        return this.settings["players"][number];
    }

    /* Get game settings
     * @category :  optional string = the name of game setting property, return all game settings if no value */
    getGameSettings(category?:string)
    {
        if(category)
            return this.settings["game"][category];
        else
            return this.settings["game"];
    }

    //  PROCESS

    /* return a random integer in an intervale
    * @min : int = minimum value
    * @max : int = maximum value */
    rand(min:number, max:number)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    /* Find who will be the next player
    * $player int = the number of the player
    * $firstPlayer int = the number of the FIRST player
    * $playersNumber int = how many players there is in this party
    * RETURN int = number of the next player */
    nextPlayer( player:number, firstPlayer:number, playersNumber:number )
    {
        if(firstPlayer == 1 && player == playersNumber || player + 1 == firstPlayer)
            return NULL;
        else if(firstPlayer != 1 && player == playersNumber)
            return 1;
        else
            return (player + 1);
    }
}