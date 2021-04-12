# emoshort [![GitHub license](https://img.shields.io/github/license/vvo/emoshort)](https://github.com/vvo/emoshort/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/emoshort)](https://www.npmjs.com/package/emoshort) [![minizipped size](https://badgen.net/bundlephobia/minzip/emoshort)](https://bundlephobia.com/result?p=emoshort) ![npm](https://img.shields.io/npm/dm/emoshort)

Simple emoji to shortname converter.

```js
import emojis from "emoshort";

console.log(emojis["🙌"]);
// ':raised_hands:'

console.log(emojis["🙌🏽"]);
// ':raised_hands::skin-tone-4:'
```