export class FormProp {

    label : string;
    id: string;
    type: string;
    obligation: string[];

    constructor(properties: {})
    {
        this.label = this.properties.label;
        this.id = properties.id;
        this.type = properties.type;
        this.obligation = properties.obligation;
    }
}