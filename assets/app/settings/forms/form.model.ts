import {FormProp} from "./form-prop.model";

export class Form {

    values: FormProp[];

    constructor(properties: FormProp[])
    {
        this.values = properties;
    }
}