// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...

//  original array
const normalFont = students.map(student => student.name);
console.log(normalFont.join(", ")); 

// 1 updated array
const upperStudents = students.map(student => student.name.toUpperCase());
console.log(upperStudents);

 // 2 grades above 85
const grade = students.filter(student => student.grade >= 85)
  .map(student => student.grade);
  console.log(grade);

// 3 student name & above 85 grade
const distruction = students.filter(student => student.grade >= 85)
  .map(student => `${student.name} : ${student.grade}`);
  console.log(distruction); 
  
// 4 average grade
 const averageGrade = students.reduce((acc, student) => {
  return acc + (student.grade || 0);  }, 0) / students.length;
  console.log(averageGrade);

 // 5 setting parameter to 0 if no grade 
  const parameter = students.filter(student => !student.grade) // || 0, to display  students that have the grade
  .map(student => `${student.name} : ${student.grade = 0 }`); // ai suggested to use // 0 but we are setting the value to 0 it's insint necessary for my pint of view
  console.log(parameter);



