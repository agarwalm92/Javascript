//24072023
//ARRAY OF OBJECT
const todos = [
    { id:1,task:"Book gas",done:true},
    { id:2,task:"Go shopping",done:false},
]

let names = ['Arpan', 'Abhishek', 'GeeksforGeeks'];



////FOREACH
////----------------

// todos.forEach(myfunc);
// function myfunc(todo) {
//    console.log(todo)
// }

// todos.forEach(function(name){
//     console.log(name.task);
// });

////MAP
////----------------
// const arrTask = todos.map(function(name){
//   return name.task;
// });
// console.log(arrTask)

////FILTER
////----------------
// const arrTasks = todos.filter(function(name){
//   return name.done === true;
// });
// console.log(arrTasks)

const arrTask = todos.filter(function(name){
    return name.done === true;
  }).map(function(t){
        return t.task
  });
console.log(arrTask)