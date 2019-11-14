import React from "react";
import { Appbar, Headline, ActivityIndicator, Divider } from "react-native-paper";
import { withNavigation, DrawerActions } from "react-navigation";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { PCards } from "../../components/personelCard";
import AppBarComp from '../../components/appBarComp';
class Hizmetler extends React.PureComponent<Props> {
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
	this.props.navigation.navigate("HizmetDetails", {
	  title: title,
	  id: id,
	  tur:"hizmetler"
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
      "https://raw.githubusercontent.com/partitect/cobi/master/hizmetler.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: true,
          content: responseJson.hizmetler
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
      <AppBarComp subTitle="Hizmetler"/>
		<ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
        <Headline style={styles.header}>
        Amasya Belediyesi Hizmetler
        </Headline>
	
		<Divider style={{marginBottom:10}}></Divider>
        {this.state.isLoading ? (
            <PCards
			data={this.state.content}
			OnPress={this.onPress}
			navScreen="HizmetDetails"
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
  }
});

export default withNavigation(Hizmetler);
