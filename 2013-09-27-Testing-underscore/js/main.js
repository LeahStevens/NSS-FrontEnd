function filter_even(numbers)
{
  return _.filter(numbers, function(num)
  {
    return (num % 2) == 0;
  });
}

function filter_odd(numbers)
{
  return _.filter(numbers, function(num)
  {
    return (num % 2) == 1;
  });
}

function filter_short_strings(strings)
{
  return _.filter(strings, function(strings)
  {
    return (strings.length < 4);
  });
}

function find_a_string(strings, word)
{
  return _.find(strings, function(string)
  {
    return string == word;
  });
}

function filter_a_strings(strings)
{
  return _.filter(strings, function(string)
  {
    return string[0].toLowerCase() == "a";
  });
}

function find_string_ending_letter(strings, letter)
{
  return _.find(strings, function(string)
  {
    return string[string.length - 1] == letter;
  });
}