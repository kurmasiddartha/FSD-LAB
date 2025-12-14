//1.
const person={//usiing Literal
    name:"Siddartha",
    rollno:56,
    age:20,
    hello:function(){console.log("This is Person Object")}
}
// console.log(person.name)

//2.
function college(name,loc){//Using Constructor
    this.name=name
    this.loc=loc
}
const p1=new college("cvr","hyd")
// console.log(p1.name)

//3.
const pp={//Using Object.create()
    greet:function(){
        // console.log(this.name)
    }
};
const Person=Object.create(pp);
Person.name="Siddartha";
Person.greet();

//properties
console.log(person["rollno"])
console.log(p1.name)

console.log("I am "+ person.name+" from "+p1.name+" College")
person.name="Siddu";
console.log(person.name)
console.log(person.age)
delete person.age
console.log(person.age)
console.log("Obeject Methods: ")
console.log(Object.keys(person))//keys
console.log(Object.values(person))//values
console.log(Object.entries(person))//entries
// console.log(person.hello())