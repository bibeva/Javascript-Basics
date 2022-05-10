// create method
let person = {
  name: 'Bibek',
  age: 33,
  developer: true,
  info: function(realAge) {
    console.log(this.name + ' is ' + realAge);
  }
}
person.info(30);