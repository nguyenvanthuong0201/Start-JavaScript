let student ={
    name: "Thương đẹp trai ",
    age: "20"
};
let skill ={
    language: "Java,Javascript",
    experience: 3,
};
let hobbies = {
    hobby1 :"Reading code ",
    hobby2 :"Playing soccer",
};

student = Object.assign(student, student,skill,hobbies);
console.log("Student:",student);