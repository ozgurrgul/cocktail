# Used libraries

* Redux: State mechanism
* Redux-thunk: Redux middleware for async actions
* Lodash: "Debounce" functionality
* React-navigation: Routing
* Prop-types: Prop validation

# Run

Android:
```
npm install -g react-native-cli
git clone https://github.com/jatarga/cocktail.git
cd cocktail
npm i
react-native run-android
```

Ios:
```
npm install -g react-native-cli
git clone https://github.com/jatarga/cocktail.git
cd cocktail
npm i
react-native run-ios
```

# List performance

It can be optimised by tweaking `FlatList` properties and by overriding `shouldComponentUpdate()` of `CocktailItem`.
