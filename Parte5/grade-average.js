//Exercise: Passing Grade Average
//Create a program that takes an array of grades as input and calculates the average only for passing grades (greater than or equal to 70)
let sumGrades = 0

const grades = [45,50,76,89,90,90,99,78,34,100,70,70,85];
const passingGrades = grades.filter(num => num >= 70);
const sumGradesArr = passingGrades.forEach(num => sumGrades += num);
const averageGrade = (sumGrades / passingGrades.length)

console.log(grades);
console.log(`The passign grades are: ${passingGrades}`);
console.log(`The average grade is : ${averageGrade}`);


