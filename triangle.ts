import {Shape} from "./Shape";

class Triangle extends Shape{
private _side1:number;
private _side2:number;
private _side3:number

    get side1(): number {
        return this._side1;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }
    getPerimeter():number{
    return this._side1 + this._side2 + this._side3
    }
    getArea():number{
    return Math.sqrt(this.getPerimeter()/2*(this.getPerimeter()/2-this._side1)*(this.getPerimeter()/2-this._side2)*(this.getPerimeter()/2-this._side3))
    }
}
let triangle = new Triangle('a','red',11,22,23)
console.log(triangle.getPerimeter())
console.log(triangle.getArea())
