function occurrences(text, word) {
  return text.split(" ").reduce((adder, term) => {
    if (term.toLocaleLowerCase() === word.toLocaleLowerCase()) {
      return (adder += 1);
    } else return adder;
  }, 0);
}

module.exports = occurrences;
