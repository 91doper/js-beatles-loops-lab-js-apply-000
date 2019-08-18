// add solution here
  var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', "Ringo Starr"];
  var instruments = ['Guitar', 'bass Guitar', 'Lead Guitar', 'Drums'];

theBeatlesPlay(musicians, instruments);

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instuments[i]);
  }
  return array;
}


const facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound pf his own voice'
  ];

function johnLennonFacts(array) {
  var i = 0;
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}
johnLennonFacts(array);

function iLoveTheBeatles(num) {
  var arr = [];
  
  do {
    arr.push('I love the Beatles!'); 
    num++;
  } while (num < 15);
  return arr;
}
iLoveTheBestles(16);