//23072023

//OBJECT
const person = {
    firstname:"John",
    lastname:"Doe",
    gender:"Male",
    education:["MCA","BCA","12th"],
    address:{
        room:"C23",
        building:"Cleavland Park",
        area:"Upper Street",
        city:"Toronto"
    }
}

//ARRAY OF OBJECT
const todo = [
    { id:1,task:"Book gas",done:true},
    { id:2,task:"Go shopping",done:false},
]


////CONVERT TO JSON
////----------------
//const personJson = JSON.stringify(person);
//console.log(personJson);

// const todoJson = JSON.stringify(todo);
// console.log(todoJson);


////PRINT
////---------
//console.log(person.firstname, person.lastname)
//console.log(person.education[1])
//console.log(person.address.room) 

//console.log(todo[0].task);


////DESTRUCTURE
////-------------
//const{firstname,lastname} = person;
//console.log(firstname)

//const{address:{city}} = person;
//console.log(city)

////ADD
////---------
//person.email="john@gmail.com"
 

//console.log(person);
//console.log(todo);

