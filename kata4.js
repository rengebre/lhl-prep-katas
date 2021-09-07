const instructorWithLongestName = function(instructors) {
  let maxNameLength = 0;
  let maxNameIndex = -1;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > maxNameLength) {
      maxNameLength = instructors[i].name.length;
      maxNameIndex = i;
    }
  }
  return instructors[maxNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));