module.exports = {
    "env": {
        "es6": true,
        "node": true
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
    }
};