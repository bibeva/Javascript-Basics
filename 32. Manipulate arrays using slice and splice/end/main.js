// use slice
const persons = ['John', 'Sia', 'Mary', 'Ella', 'Charlie'];
const newPersons = persons.slice(1,3);

console.log(newPersons);
console.log(persons);

// use splice to delete
const persons2 = ['John', 'Sia', 'Mary', 'Ella', 'Charlie'];
persons2.splice(1, 2);

console.log(persons2);

// use splice to delete and add
const persons3 = ['John', 'Sia', 'Mary', 'Ella', 'Charlie'];
persons3.splice(1, 1, 'Adam');

console.log(persons3);