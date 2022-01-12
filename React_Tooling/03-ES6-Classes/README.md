ES6 brings a very nice feature: native [**Classes**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). There is no need to fiddle with `prototype` anymore, just write a class definition and use it, like Ruby or any proper object-oriented language!

Make sure you are in the right folder and you download the necessary NPM packages before starting!

```bash
cd ~/code/<github_nickname>/react-redux-challenges
cd 01-React/01-Tooling/03-ES6-Classes
yarn install
```

## Counter class

Let's do a **refactoring** exercise. In the previous challenge, you had to write an `occurrence(text, word)` function which returns the number of time `word` is contained in `text`. Which means that if you call this method twice for two different `word`s, you'd have to run the algorithm twice! Very costly, especially if `text` is really long.

What we should have here is a `Counter` class which does the indexing once, and then can be queried for as many word we like in O(1) (constant time).

Open the `lib/01_counter.js` file and implement the `constructor()` and the `occurrences()` method. The constructor should build an internal [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) of `word => occurrences of this word`, and `occurrences()` should return an integer reading into this internal map.

Now it's time to one more **refactoring!**, lets change the last exercise and instead of making it by classes, use arrow functions. For this case, use the file `02_counter_arrow.js`.

Your turn!
