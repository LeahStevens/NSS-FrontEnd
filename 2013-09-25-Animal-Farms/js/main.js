var fluffy_cats = [];

var name = prompt('Enter a cats name or blank to exit:');



while(name)
{

  cat.name = name;
  cat.age = parseInt(prompt('Age'));
  cat.fluffy_level = prompt('Fluffy?');
  fluffy_cats.push(cat);
  name = prompt('Enter a cats name or blank to exit:' + avg_age);
}

debugger;

var avg_age;
var sum_of_ages = 0;

for(var i = 0; i < fluffy_cats.length; i++)
  sum_of_ages += fluffy_cats[i].age;

avg_age = sum_of_ages / fluffy_cats.length;

console.log('You have' + ' ' + fluffy_cats.length + ' ' + 'fluffy cats, the average age is' + ' ' +Math.ceil(avg_age));






