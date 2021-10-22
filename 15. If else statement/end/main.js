// use if else statement
var city = 'London';

if(city === 'London') {
  console.log(city + ' is in UK.');
} else {
  console.log(city + ' is not in UK.');
}

// use else if
var country = 'UK';

if(country === 'UK') {
  console.log(country + ' is in Europe.');
} else if (country === 'Japan') {
  console.log(country + ' is in Asia.');
} else if (country === 'Brazil') {
  console.log(country + ' is in South America.');
} else {
  console.log(country + ' might be in another continent.');
}