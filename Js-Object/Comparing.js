//conparing variables;
let a =1;
let  b = 1;

console.log("a==b: ", a==b);
console.log("a===b: " , a===b);


/// comparing object
let obj1 = new Object();
obj1.name="Thuong ne hi' hi'";

let obj2= new Object();
obj2.name="Thuong ne hi' hi'";

console.log("obj1==obj2: ", obj1==obj2);
console.log("obj1===obj2: ", obj1===obj2);
console.log("Object.is() ",Object.is(obj1,obj2));


// true case 
 let obj3 = new Object();
 obj3.name="Thương ";

let obj4=obj3;

console.log("obj3==obj4: ", obj3==obj4);
console.log("obj3===obj4: ", obj3===obj4); 
console.log("Object,is()",Object.is(obj3,obj4));