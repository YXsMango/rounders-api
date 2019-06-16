module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2
    ],
    "semi": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "never"
    ]
  },
  "globals" : {
    "process": false,
    "require": false,
    "console": false,
    "Buffer": false,
    "Promise": false
  },
  "parserOptions": {
    "ecmaVersion": 2018
  }
};
