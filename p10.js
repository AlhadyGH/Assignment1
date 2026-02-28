function destructures(name,age){
    return{
        name:name,
        age:age
    };

}
let user=destructures('John',25);
console.log(user.name+" is "+user.age+" years old")