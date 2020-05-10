//FOR
// var x=5;
// var factor=1;
// for(let i=x;i>=1;i--)
// {
//     factor *=i;
// }
// console.log(factor);

//For In
// var object = {'Name':'Thuong','Age':'20'};
// for(let prop in object){
//     console.log(object[prop])
// }
// // For Of
// for(let item of[10,20,30])
// {
//     console.log(item)
// }
// var y=7;
// factorial=1;

// //While
// while(y >= 1)
// {
//     factorial*=y;
//     y--
// }
// console.log(factorial);

// Do while
// var z = 5;
// factorial = 1;
// do{
//     factorial *=z;
//     z--
// }
// while(z >= 1)
// console.log(factorial);

var x = 3;
var factorial = 1;

for(let i=x; i>=1; i--)
{
    factorial *=i;
    if(i==2)
    {
        break;
    }
}
console.log(factorial)
