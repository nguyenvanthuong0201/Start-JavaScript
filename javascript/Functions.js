// function Hello() {
//     console.log("Hello Thương đẹp trai ^_^ ")
// }
// Hello();


// //return
// function returnMe() {
//     console.log("Đẹp trai thật mà ");
//     return 5;
// }
// console.log(returnMe());

// //parameter
// function add(x,y) {
//     return x+y;    
// }
// console.log(add(5,15))


// function lengtOfMe(...parameter) {
//     console.log(parameter);
//     return parameter.length
// }
// console.log(lengtOfMe(5,6,7,8,9,10,11,12,13,14))


// let func = new Function("x","y","return x*y")
// console.log(func(5,6))

// function factorial(num) {
//     if(num <= 0)
//     {
//         return 1;
//     }    
//     else
//     {
//         return num *factorial(num-1)
//     }
// }
// console.log(factorial(6));


// var food=(x,y,z) => x+y+z;
// console.log(food(5,6,7))


// function* query() {
//     const name=yield"What's your name ?";
//     const age=yield"how old are you ?";
//     return `${name} is ${age}`;
// }
// const information=query();
// console.log(information.next());
// console.log(information.next("Thương"));
// console.log(information.next("20"));


// function* query(){
//     let num = 1;
//     while(true){yield num++}
// } 
// var number=query();
// console.log(number.next().value);
// console.log(number.next().value);
// console.log(number.next().value);
// console.log(number.next().value);
// console.log(number.next().value);


function *anotherGenerator(name) {
        yield `From Another Generator ${name}`
}
function *myGenerator(name) {
    yield `Hi ${name}`;
    yield* anotherGenerator(name);
    yield `bye bye ${name} đẹp trai`
}
var my = myGenerator("Thương");





















console.log(my.next());
console.log(my.next());
console.log(my.next());

