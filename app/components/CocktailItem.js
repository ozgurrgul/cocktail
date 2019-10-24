import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from 'react-native';

class CocktailItem extends React.Component {
  render() {
    const {cocktail} = this.props;
    return (
      <View style={styles.container}>
        <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image}/>
        <Text style={styles.text}>{cocktail.strDrink}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: "#444444"
  }
});

CocktailItem.propTypes = {
  cocktail: PropTypes.object.isRequired
};

export default CocktailItem;