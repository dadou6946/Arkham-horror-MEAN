import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-type-form',
    template:
    `
        <form (ngSubmit)="onSubmit()" #typeForm="ngForm">
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input type="text" class="form-control" id="name"
                               [(ngModel)]="pokemon.name" name="name"
                               #name="ngModel">
                    </div>


                    <div class="form-group">
                        <label for="types">Types</label>
                        <div *ngFor="let type of types" class="row">
                            <input type="checkbox"
                                   class="filled-in"
                                   id="{{ type }}"
                                   [value]="type"
                                   [checked]="hasType(type)"
                                   (change)="selectType($event, type)"
                            />
                            <label [attr.for]="type">
                                <span class="{{ type | pokemonTypeColor }}">{{ type }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="divider"></div>
                    <div class="section center">
                        <button type="submit"
                                class="waves-effect waves-light btn"
                                [disabled]="!pokemonForm.form.valid">
                            Valider</button>
                    </div>
                </div>
            </div>
        </form>
        <h3 *ngIf="!pokemon" class="center">Aucun pokémon à éditer...</h3>
    
    `
})

export class TypeFormComponent implements OnInit
{

    constructor(private router: Router)
    {}

    ngOnInit()
    {}

    // La méthode appelée lorsque le formulaire est soumis.
    onSubmit(): void {
        let link = ['/settings/chooseCharacters'];
        this.router.navigate(link);
        console.log("Submit form !");
    }

}