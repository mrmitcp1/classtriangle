export class Shape {
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }
    private _name:string;
    private _color:string
}