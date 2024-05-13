"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// When does the PROG200 course start?

//1. loop with if
for (const course of courses) {
  if (course.CourseId == "PROG200") {
    console.log(course.StartDate);
  }
}

//2. use find to loop and isolate if condition in function
// function isPROG200(course) {
//   if (course.CourseId == "PROG200") {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPROG200(course) {
  return course.CourseId == "PROG200";
}

let prog200Course = courses.find(isPROG200);
console.log(prog200Course.StartDate);

//3. Use find to loop and shorter arrow function syntax
let prog200Course1 = courses.find((course) => course.CourseId == "PROG200");
console.log(prog200Course1.StartDate);

// What is the title of the PROJ500 course?

let proj500Course = courses.find(course => course.CourseId == "PROJ500") 
console.log("title of the PROJ500 course  "+proj500Course.Title)

// What are the titles of the courses that cost $50 or less?

let courseCostUnder50 = courses.filter(course => course.Fee <= 50);

let titleArr = [];

for (const course of courseCostUnder50) {
  titleArr.push(course.Title)
  
}

console.log("the titles of the courses that cost $50 or less  " +titleArr)


// What classes meet in "Classroom 1"?

let classroom1 = courses.filter(course => course.Location == "Classroom 1");

let classArr = [];

for (const course of classroom1) {
  classArr.push(course.Title);

  
}

console.log("classes meet in 'Classroom 1' =>  " + classArr)

