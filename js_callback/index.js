// function uong_nuoc(user){
//     setTimeout(()=>{
//         console.log("Uống nước rồi nhé");
//         user();
//     },5000)    
// }
// function an_com(){
//     console.log("Ăn cơm luôn rồi nhé");
// }
// var user = function(){
//     an_com();
// }
// uong_nuoc(user);

var myModule = require('myModule');
var myModuleInstance = new myModule();
myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'