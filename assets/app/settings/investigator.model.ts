export class Investigator {

    name: string;
    playerName: string;
    position?: number;

    constructor(name: string, playerName: string, position?: number){
        this.name = name;
        this.playerName = playerName;
        this.position = position;
    }
}