module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      4
    ],
    "semi": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-console": "off",

  },
  "globals" : {
    "process": false,
    "require": false,
    "console": false,
    "Buffer": false,
    "Promise": false,
    "module": false,
    "__dirname": false
  },
  "parserOptions": {
    "ecmaVersion": 2018
  }
};
