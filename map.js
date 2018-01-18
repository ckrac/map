var words = ["ground", "control", "to", "major", "tom"];

var map = function (words, cb) {

  var newWords = [];
  words.forEach(function(element) {
    newWords.push(cb(element));
    // console.log(element);
    // console.log(cb(element));
  });
  console.log(newWords);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});