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

///Filter
// let BasicEmployee = employee.filter((employee)=>employee["salary"] <=1030);
// console.log(BasicEmployee)


//Using some
let employeeSome= employee.some((employee)=> employee["salary"]<1000)
console.log(employeeSome)


///using find
let employeeFind= employee.find((employee)=> employee["name"] === "Thanh");
console.log(employeeFind)


//using file index.

let employeeFindu= employee.findIndex((employee)=> employee["name"] === "Thanh");
console.log(employeeFindu)