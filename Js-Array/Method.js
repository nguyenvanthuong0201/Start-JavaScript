employee1 = {
  name: "Thương",
  position: "Thành viên",
  salary: 1030,
};
employee2 = {
  name: "Việt Anh",
  position: "Leader",
  salary: 1040,
};
employee3 = {
  name: "Hiếu",
  position: "Thành viên",
  salary: 1030,
};
employee4 = {
  name: "Thanh",
  position: "Thành viên",
  salary: 1010,
};
employee5 = {
  name: "Nghĩa",
  position: "Thành viên",
  salary: 1020,
};
employee = [employee1, employee2, employee3, employee4, employee5];

// employee.forEach((employee) => {
//   employee["salary"] *=1.2;
//   console.log(employee);
// });
// employee.map(employee=>{
//   console.log(employee);
// })



// let newlist = employee.map((employee) => employee["salary"] *=1.2);
// console.log(newlist);
// ////////////////////// reduce
// let finaltotalSarary = newlist.reduce((a, b)=>a + b);
// console.log(finaltotalSarary)


let BasicEmployee = employee.filter((employee)=>employee["salary"] <=1030);
console.log(BasicEmployee)