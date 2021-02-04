// --------------- A VECTOR TYPE --------------- //
class Vec {
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    plus(v){return new Vec(this.x+v.x,this.y+v.y)}
    minus(v){return new Vec(this.x-v.x,this.y-v.y)}
    get length(){return Math.modulus(this.x,this.y)}
}
//Since the Math object has no method to calculate the modulus of a vector, I add this method to the object and then use it on the length getter, this provides Math with the modulus method, so if I want to use it again I only need to call that method.
Math.modulus = function(x,y){return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))};

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
