function add_three(n)
{
 return n + 3;
}

function square(n)
{
 return Math.pow(n, 2);
}

function area(n, x)
{
 return n * x;
}

function volume(n, x, h)
{
 return area(n,x) * h;
}

function power(base, exp){
var product = 1;
for(var i = 0; i < exp; i++)
  product *= base;
return product;
}

function greeting(h, j)
{
 return h +', '+ j +'!';
}

function pig_latin(string)
{
 return string.slice(1) + string[0] + 'a';
}

function pig_greeting(greeting, name)
{
 return pig_latin(greeting) + ', ' + pig_latin(name) + '!';
}

/*
function pig_sentence(sentence){
var split = sentence.split(' ');
var pig_words = [];

for (var word= 0; word < split.length ; word++)
pig_words.push(pig_latin.(split[i]));

return pig_words.join(' ');

}*/