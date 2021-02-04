// --------------- GROUPS --------------- //
class Group {

    constructor(){
       this.group=[]
    }

    add(value){this.group.includes(value)? this.group : this.group.push(value)}

    delete(value){ this.group=this.group.filter(elem=>elem!==value)}

    has(value){return this.group.includes(value)}

    //rather than adding a new method I modified the static from method to return a iterable value, I could have just returned a itrable format, but the goal of this exercise was to use the Symbol.iterator, I used a generator function and the yeild keyword as described in MDN web docs here: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol/iterator

    //In the return statment I deepclone the values and use the spread/rest three dots operator to obtain the values inside the myIterable object, as I want to have a clone not only of the object but of the values inside I use a deep clone. 

    static from(obj){
        var myIterable={}
        myIterable[Symbol.iterator]= function*(){
            yield obj.map((e)=>{return (e)});
        };
        return (JSON.parse(JSON.stringify(...myIterable)))
    }
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }

