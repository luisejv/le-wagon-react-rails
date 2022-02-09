To save time, in all lectures + exercises of this week, we will start from **boilerplates**. A boilerplate is a set of folder and files already configured so that you can start coding right away. Many boilerplates exist covering all combination of permutation in the (ES6, Babel, Webpack, etc.) set. At Le Wagon, we made our own: [webpack-boilerplate](https://github.com/lewagon/webpack-boilerplate)

The goal of this exercise is to, at once, start **from scratch** and see how the different pieces are glued together.

```bash
cd ~/code/<github_nickname>/react-redux-challenges
cd 01-React/01-Tooling/04-Webpack-From-Scratch
```

💡 Notice there were no `yarn install` as the folder does not contain any `package.json`

## Initializing a Node project with [yarn](https://yarnpkg.com/lang/en/)

The first thing you need is a `package.json` file. You can generate one with the following interactive command:

```bash
yarn init
```

## [ESlint](https://eslint.org/)

Linting the code is an important step to keep your code clean and please your teammates. That's the first package you should always add to a new project:

```bash
yarn add eslint --dev
rm package-lock.json # we already have yarn.lock
```

For VS Code:
Click on the Extension Marketplace. Search for the two packages listed above to see if you’ve already installed them. If not, click the button to install. Repeat for both packages. Make sure to restart (`cmd` + `q`) after both have been installed.

Now we are ready to initialize `eslint`.

### Initalizing eslint.

Go to your terminal and type

```bash
eslint --init
```

The questions prompted by eslint are now different from the ones showed in the lecture, here is what we recommend 👇

1. ? How would you like to use ESLint? (Use arrow keys)

- ❯ To check syntax, find problems, and enforce code style

2. ? What type of modules does your project use? (Use arrow keys)

- ❯ CommonJS (require/exports) -- We are not in react yet 😉

3. ? Which framework does your project use? (Use arrow keys)

- ❯ None of these -- We are not in react yet 😉

4. ? Where does your code run? (Press `<space>` to select, `<a>` to toggle all, `<i>` to invert selection)

- ❯ Node -- We will jump to the browser in the next challenge, but for now we are going to select the `node` option.

5. ? How would you like to define a style for your project? (Use arrow keys)

- ❯ Use a popular style guide

6. ? Which style guide do you want to follow? (Use arrow keys)

- ❯ Airbnb (https://github.com/airbnb/javascript)

7. ? What format do you want your config file to be in? (Use arrow keys)

- ❯ JavaScript

8. ? Would you like to install them now with npm? (Y/n)

- ❯ Type the `n` key. -- We use `yarn` as a package manager, not `npm` 👌

And finally if everything went right, you should see this message:

```bash
Successfully created .eslintrc.js file in /Users/<user_name>/code/<your_github_user_name>/react-redux-challenges/01-React/01-Tooling/04-Webpack-From-Scratch
```

To tweak the ESlint rules to your own taste, you can open the `.eslintrc.json`. Here is a configuration we like:

```js
{
  "extends": "airbnb-base",
  "rules": {
    "comma-dangle": "off",
    "quotes": "off",
    "arrow-body-style": 0,
    "space-before-function-paren": 0
  },
  "env": {
    "browser": true
  }
}
```

Once your done, check if eslint is still available. Just run `which eslint`:

- if it returns `./node_modules/.bin/eslint`, everything is fine;
- if it returns can't locate eslint (or something similar), just run `yarn install` and everything should be fine.

Create a first `src/index.js` file and write a JS function which will `alert('Hello world')`. You can run the linter with:

```bash
eslint src/index.js
```

See what we have here? A linter warning. By default, ESLint [recommends not to use this UI feature](https://eslint.org/docs/rules/no-alert). It's up to us to **temporarly disable** this rule from the source file or add a rule in the `.eslintrc.json`. Your choice!

```js
/* eslint no-alert: "off" */
```

```js
// [...]
  "rules": {
    "no-alert": "off",
    // [...]
  }
// [...]
```

## [Webpack](https://webpack.js.org/)

Webpack will help us bundle every javascript file together to produce a neat bundled file. This is something Rails also does thanks to the [Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html).

```bash
yarn add webpack webpack-cli@3.3.12 webpack-dev-server --dev
```

Let's have a look at the `.bin` folder of our project:

```bash
ll node_modules/.bin
```

😱 Wow! That's a lot! We'll use `eslint`, `webpack` and `webpack-dev-server`. You can convince yourself that writing `eslint` actually uses the binary in that folder thanks to the `$PATH`:

```bash
type -a eslint
type -a webpack
type -a webpack-dev-server
```

Great, now we need to configure Webpack, and have a default HTML entry point. To do that, you need two files at the root of the project:

```bash
touch index.html
touch webpack.config.js
```

Copy-paste this basic config:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

```js
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devtool: "source-map",
};
```

Now you can launch the dev server with:

```bash
webpack-dev-server
```

🚀 Yeah! Open a new Chrome tab and go to [localhost:8080](http://localhost:8080). You should get an alert!

Awesome. Let's have a look at Webpack internals through the Browser inspector. If you open it, and go to the Network tab, you get this:

![](https://raw.githubusercontent.com/lewagon/react-redux-images/master/webpack/webpack_chrome_network_tab.png)

We have four HTTP requests served by the Webpack Dev Server:

1. The first one serves `/` with the `index.html` file.
2. The second one is the `main.js` file compiled by Webpack. Open [its source](http://localhost:8080/main.js)! There's a lot in here, if you scroll at the very bottom, you will find **your code**. The reason why there is so much is that by default, `webpack-dev-server` serves a **development** bundle, with debugging information.
3. The third one is `/sockjs-node/info`, a request to ask the Webpack Dev Server about configuration. Is the HMR (Hot Module Replacement) enabled?
4. Yes it is! A websocket (fourth request) is opened and maintained with the server. Put your VS code Text and Chrome side by side. You can change the code in VS code, Save, and **without reloading**, the Chrome tab will be updated.

Try this: remove existing code from `src/index.js` and replace it with:

```js
// src/index.js
document.body.innerHTML = "Hello world";
```

Try changing the string and save. See how it hot reloads in the browser 💥 ?

## [Babel](https://babeljs.io)

ES6 is now supported by more than [95% of browsers](http://kangax.github.io/compat-table/es6/), still may want to support the remaining 5%. To do that, we need Babel. Babel will **compile** our ES6 code into ES5, the previous version of JavaScript.

To add Babel to your Node.js project, run this:

```bash
yarn add @babel/core @babel/preset-env --dev

# Create a Babel config file with:
echo '{ "presets": ["@babel/preset-env"] }' > .babelrc

# For webpack
yarn add babel-loader --dev
```

Then configure Webpack to use babel:

```js
// webpack.config.js

// [...]
module: {
  rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }];
}
// [...]
```

Let's try this out. Open your `src/index.js` file and update it with some ES6 fat arrow:

```js
// src/index.js
const sayHello = () => {
  document.body.innerHTML = "Hello world";
};

sayHello();
```

Now, open [localhost:8080/main.js](http://localhost:8080/main.js) and scroll to the very bottom.
What do you see? ES5! Babel works 👌

You can try a more complex example. Let's create a `Greeter` class:

```js
// src/index.js
class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    document.body.innerHTML = `Hello ${this.name}!`;
  }
}

const greeter = new Greeter("Boris");
greeter.sayHello();
```

Have a look at how Babel compiles this ES6 code into ES5 with `function`.

## Debugging

The Google Chrome **Source** tab works really well with this Webpack setup thanks to [**Source maps**](http://blog.teamtreehouse.com/introduction-source-maps). Remember, Webpack is only serving **one** file, `main.js`, with a lot of code that we didn't write. If there is an exception in the code, or if you add `debugger`, you want to only see your code!

Well, try it! Go ahead and add a `debugger` as the first line of the `sayHello()` function. See? You get **your** ES6 source code displayed, not the compiled version. You can even use `Cmd` + `P` to navigate through files:

![](https://raw.githubusercontent.com/lewagon/react-redux-images/master/webpack/webpack_chrome_source_tab.gif)

Navigating to a file is handy when you want to add a **Breakpoint**. This acts like a `debugger` in the code, but is handled in Chrome without you changing the code. To add a breakpoint, navigate to a file, and click in the gutter on the left (with the line numbers). A little blue rectangle will appear. Reload the page, and the JavaScript execution will halt at this breakpoint.

That's it! If you have questions on one piece of this architecture, please ask a TA! You can play a bit with Webpack and ES6, try to change some HTML through JavaScript. Let's have lunch and start with the first React lecture this afternoon.
