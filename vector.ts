
export class Vector{

    private elements: number[]

    constructor(n: number, k: number){
         this.elements = [] 
        for (let index = 0; index < n; index++) {
             this.elements.push(Math.round(Math.random()* k))
            } 
    }


    print(){
       return this.elements
    }



    add(v1:Vector):Vector{
        let sumaV1: Vector = new Vector(4,8)
        if (v1.elements.length == this.elements.length) {
      for (let index = 0; index < this.elements.length; index++) {
        sumaV1.elements.push(v1.elements[index] + this.elements[index])
      }}
      return sumaV1 
    
    }



    subs(v1:Vector):Vector{
        let restaV1: Vector = new Vector(4,8)
        if (v1.elements.length == this.elements.length) {
      for (let index = 0; index < this.elements.length; index++) {
        restaV1.elements.push(v1.elements[index] - this.elements[index])
      }}
      return restaV1
    }


    mult(v1:Vector):Vector{
        let multV1: Vector = new Vector(4,8)
        if (v1.elements.length == this.elements.length) {
      for (let index = 0; index < this.elements.length; index++) {
        multV1.elements.push(v1.elements[index] + this.elements[index])
      }}
      return multV1
    }
       

    multNumber(n: Number):Vector{
            let multNum: Vector = new Vector(4,8)
    for (let index = 0; index < this.elements.length; index++) {
        multNum.elements.push(this.elements[index] * this.elements[0])
      }
      return multNum

    }
}
// let vectorElement: Vector = new Vector(4,8);

// let v1: Vector = new Vector(4,8) 

