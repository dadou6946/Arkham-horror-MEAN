import {Component} from "@angular/core";

@Component({
    selector: "app-home",
    template: `
        <h1 class="jumbotron text-center">Welcome to Arkham Horror</h1>
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-xs-offset-3">
                    <a [routerLink]="['/settings']" class="btn btn-success text-center">Nouvelle partie</a>
                </div>
            </div>
        </div>
    `
})
export class HomeComponent {

}