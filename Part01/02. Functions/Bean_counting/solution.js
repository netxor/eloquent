function countBs(word) {
  counter = 0;
  for (i = 0; i < word.length; i++) {
    if (word.charAt[i] === 'B')
      counter += 1;
  }
  return counter;
}

console.log(countBs("Bear is my Brother"));
