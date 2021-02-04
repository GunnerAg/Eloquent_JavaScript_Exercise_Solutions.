// --------------- GROUPS --------------- //
class Group {
    constructor(){
       this.group=[]

    }
    add(value){this.group.includes(value)? this.group : this.group.push(value)}
    delete(value){ this.group=this.group.filter(elem=>elem!==value)}
    has(value){return this.group.includes(value)}
    static from(obj){
        let myGroup=new Group; 
        obj.map((e)=>{myGroup.add(e)});
        return myGroup
    }
};

let test=Group.from([10,20])
console.log(test)
console.log(test.has(10))
console.log(test.has(30))
test.add(10)
test.delete(10)
console.log(test.has(10))
