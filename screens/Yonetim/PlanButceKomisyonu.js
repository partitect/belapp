import React from "react";
import { Appbar, Headline, ActivityIndicator, Divider } from "react-native-paper";
import { withNavigation, DrawerActions } from "react-navigation";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { PCards } from "../../components/personelCard";
import AppBarComp from '../../components/appBarComp';
class PlanButceKomisyonu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
	  content: null,
      refreshing: false
    };
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.makeRemoteRequest().then(() => {
      this.setState({ refreshing: false });
    });
  };
  makeRemoteRequest = () => {
    return fetch(
      "https://raw.githubusercontent.com/partitect/cobi/master/planbutce.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: true,
          content: responseJson.planbutce
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
       <AppBarComp subTitle="Plan Bütçe Komisyonu"/>
		<ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
        <Headline style={styles.header}>
        Amasya Belediyesi Plan Bütçe Komisyonu
        </Headline>
	
		<Divider style={{marginBottom:10}}></Divider>
        {this.state.isLoading ? (
            <PCards
              data={this.state.content}
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

export default withNavigation(PlanButceKomisyonu);
