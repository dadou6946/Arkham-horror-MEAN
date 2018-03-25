import {Component} from "@angular/core";

@Component({
    selector: "app-header",
    template: `
    <header class="row">
        <nav>
            <ul class="nav nav-pills">
                <li><a>Number</a></li>
                <li><a>Name</a></li>
            </ul>
        </nav>
    </header>
    `
})

export class HeaderComponent{

}