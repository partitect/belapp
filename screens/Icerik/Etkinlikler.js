import React from "react";
import { Appbar, Headline, ActivityIndicator, Divider } from "react-native-paper";
import { withNavigation, DrawerActions } from "react-navigation";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { HCards } from "../../components/haberCard";
import AppBarComp from '../../components/appBarComp';
class Etkinlikler extends React.Component {
  constructor(props) {
    super(props);
	let { params } = this.props.navigation.state;
    this.title = params ? params.title : 1;
    this.id = params ? params.id : 1;
    this.onPress = this.onPress.bind(this);
    this.state = {
      isLoading: false,
	  content: null,
      refreshing: false
    };
  }
  onPress(title, id) {
    this.props.navigation.navigate("Details", {
      title: title,
      id: id
    });
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.makeRemoteRequest().then(() => {
      this.setState({ refreshing: false });
    });
  };
  makeRemoteRequest = () => {
    return fetch(
      "https://raw.githubusercontent.com/partitect/cobi/master/icerikler.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: true,
          content: responseJson.icerikler[0].etkinlikler
        });
      })
      .catch(error => {});
  };
  componentDidMount() {
    this.makeRemoteRequest();
  }

  _goBack = () => console.log("Went back");

  _onSearch = () => console.log("Searching");

  _onMore = () => console.log("Shown more");
  render() {
    //console.log(this.state.content);
    return (
      <View style={{ flex: 1 }}>
      
		<ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
      
        {this.state.isLoading ? (
            <HCards
			  data={this.state.content}
			  OnPress={this.onPress}
			  navScreen="Etkinlikler"
            />
         
        ) : (
          <ActivityIndicator animating={true} color="red" />
        )}
		</ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContent: {
    padding: 10
  },
  content: {
    flexDirection: "row",
	flexWrap: "wrap",
  },
  header:{
	  fontSize:18,
	  textAlign:'center'
  },
  vHeader: {
	borderBottomColor: 'rgba(0,0,0,.1)',
	borderBottomWidth: 1,
	fontWeight: 'normal',
	fontFamily: 'opensans',
	marginBottom:5,
	paddingBottom:5,
	paddingHorizontal:10
}
});

export default withNavigation(Etkinlikler);
