const organizeInstructors = function(instructors) {
  let returnObject = {};
  for (let instructor of instructors) {
    if (instructor.course in returnObject) {
      returnObject[instructor.course].push(instructor.name);
    } else {
      returnObject[instructor.course] = [instructor.name];
    }
  }
  return returnObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));