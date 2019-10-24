import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import CocktailIcon from '../assets/cocktail-icon.png';
import SearchIcon from '../assets/search-icon.png';

export default class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image source={CocktailIcon} style={styles.image} />
        <TouchableOpacity 
          style={styles.input}
          onPress={() => navigate('CocktailFinderScreen')}
        >
          <Image source={SearchIcon} style={styles.searchIcon} />
          <Text style={styles.searchText}>Search your favorite cocktail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D82C5A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 90,
    height: 90,
  },
  input: {
    backgroundColor: '#FFFFFF',
    flexDirection: "row",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },
  searchIcon: {
    width: 20,
    height: 20,
    paddingLeft: 10
  },
  searchText: {
    color: "#444444",
    paddingLeft: 10,
    fontSize: 17
  }
});
