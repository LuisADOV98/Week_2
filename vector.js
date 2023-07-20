"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var index = 0; index < n; index++) {
            this.elements.push(Math.round(Math.random() * k));
        }
    }
    Vector.prototype.print = function () {
        return this.elements;
    };
    Vector.prototype.add = function (v1) {
        var sumaV1 = new Vector(4, 8);
        if (v1.elements.length == this.elements.length) {
            for (var index = 0; index < this.elements.length; index++) {
                sumaV1.elements.push(v1.elements[index] + this.elements[index]);
            }
        }
        return sumaV1;
    };
    Vector.prototype.subs = function (v1) {
        var restaV1 = new Vector(4, 8);
        if (v1.elements.length == this.elements.length) {
            for (var index = 0; index < this.elements.length; index++) {
                restaV1.elements.push(v1.elements[index] - this.elements[index]);
            }
        }
        return restaV1;
    };
    Vector.prototype.mult = function (v1) {
        var multV1 = new Vector(4, 8);
        if (v1.elements.length == this.elements.length) {
            for (var index = 0; index < this.elements.length; index++) {
                multV1.elements.push(v1.elements[index] + this.elements[index]);
            }
        }
        return multV1;
    };
    Vector.prototype.multNumber = function (n) {
        var multNum = new Vector(4, 8);
        for (var index = 0; index < this.elements.length; index++) {
            multNum.elements.push(this.elements[index] * this.elements[0]);
        }
        return multNum;
    };
    return Vector;
}());
exports.Vector = Vector;
// let vectorElement: Vector = new Vector(4,8);
// let v1: Vector = new Vector(4,8) 
