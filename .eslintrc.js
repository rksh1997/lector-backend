module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": 0,
        "quotes": ["error", "single"],
        "semi": ["error", "never"],
        "no-underscore-dangle": 0,
        "func-names": 0
    }
};