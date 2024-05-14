let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];


// Who is the Academy Member whose ID is 187?

let foundMember187 = academyMembers.find(member => member.memID == 187);
console.log(foundMember187.name)

// Who has been in at least 3 films?
let foundMoreThan3Films = academyMembers.filter(member => member.films.length >= 3).forEach(member =>
    console.log(member.name)
)


// Who has a name that starts with "Bob"?

let foundBob = academyMembers.filter(member => member.name.substring(0,3) == "Bob").forEach(member =>
    console.log(' Name that starts with "Bob": '+ member.name)
)


// HARDER: Which Academy Members have been in a film that starts with "A"

let foundFilmWithA = academyMembers.filter(member => member.films.find(member => member.startsWith("A")));
console.log(foundFilmWithA)


