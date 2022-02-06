const termsMap = new Map();

export default setTerms = (text) => {
  if (text && text.length > 0) {
    text.split(" ").forEach((term) => {
      const key = term.toLowerCase();
      const value = termsMap.get(key) ? termsMap.get(key) + 1 : 1;
      termsMap.set(key, value);
    });
  }
}

export default getOcurrences = (word) => {
  return termsMap.get(word.toLowerCase()) || 0;
}

