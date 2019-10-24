import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { setText, trySearch, cancelState } from "../actions/cocktail-finder";
import SearchIcon from '../assets/search-icon.png';
import LeftArrowIcon from '../assets/left-arrow-icon.png';
import CocktailItem from "../components/CocktailItem";
import debounce from "lodash/debounce";

class CocktailFinderScreen extends React.Component {

  delayedSearch = debounce((text) => {
    this.props.trySearch(text);
  }, 1000)

  renderBackButton() {
    const {text} = this.props;
    if (text) return null;
    return (
      <TouchableOpacity onPress={() => {
        this.props.cancelState();
        this.props.navigation.goBack();
      }}>
        <Image source={LeftArrowIcon} style={styles.leftArrow}/>
      </TouchableOpacity>
    )
  }

  renderCancelButton() {
    const {text} = this.props;
    if (!text) return null;
    return (
      <TouchableOpacity onPress={() => { this.props.cancelState() }}>
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const {loading, text, cocktails} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {this.renderBackButton()}
          <View style={styles.fakeTextInputContainer}>
            <Image source={SearchIcon} style={styles.searchIcon}/>
            <TextInput 
              style={styles.textInput}
              value={text}
              onChangeText={(text) => {
                this.props.setText(text);
                if (text.length >= 3) {
                  this.delayedSearch(text);
                }
              }} />
          </View>
          {this.renderCancelButton()}
        </View>
        {loading && <ActivityIndicator size="large" color="#FFFFFF" style={styles.loading} />}
        <FlatList
          data={cocktails}
          renderItem={({item}) => <CocktailItem cocktail={item} />}
          keyExtractor={(item) => item.idDrink}
          style={{ padding: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D82C5A'
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: "center"
  },
  leftArrow: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  fakeTextInputContainer: {
    backgroundColor: "#CCCCCC",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  textInput: {
    flex: 1,
    borderColor: 'transparent',
    fontSize: 17,
    marginLeft: 10
  },
  cancelButton: {
    fontSize: 17,
    marginLeft: 10,
    color: "red"
  },
  loading: {
    marginTop: 20
  }
});

const mapState = state => ({
  loading: state.cocktailFinder.loading,
  text: state.cocktailFinder.text,
  cocktails: state.cocktailFinder.cocktails
});

const actionCreators = {
  setText,
  trySearch,
  cancelState
};

export default connect(
  mapState,
  actionCreators
)(CocktailFinderScreen);