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

function isPROG200(course) {
    if(course.CourseId == "PROG200") {
        return true;
    } else {
        return false;
    }
}

let foundPROG200 = courses.find(isPROG200)

console.log("the PROG200 course start " + foundPROG200.StartDate)



// arrow function







// What is the title of the PROJ500 course?


function findTitle(course) {
    if(course.CourseId == "PROJ500") {
      return true;
    } else {
      return false;
    }
}

let titleOfPROJ500 = courses.find(findTitle)

console.log(titleOfPROJ500.Title)

// What are the titles of the courses that cost $50 or less?

function filterTitleCost50(course) {
  if(course.Fee <= 50) {
    return true;
  } else {
    return false;
  }
}

let cost50OrLess = courses.filter(filterTitleCost50)

function displayTitle(course) {
  let  titleArr = []
  for (const cost of course) {

    titleArr.push(cost.Title)
    
  }

  return titleArr;
}

let display = displayTitle(cost50OrLess)

console.log(display)



// What classes meet in "Classroom 1"?

function isClassroom1(course) {
  if(course.Location == "Classroom 1") {
    return true;
  } else {
    return false;
  }
}

function displayClass() {
  let newClassArr = [];
  for (const course of titleMeetClassroom1) {
    
    newClassArr.push(course.Title)
    
  }

  return newClassArr;
}

let titleMeetClassroom1 = courses.filter(isClassroom1)

console.log(titleMeetClassroom1)

console.log(displayClass())