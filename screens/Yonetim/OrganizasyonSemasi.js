import React from "react";
import {
  Appbar,
  Headline,
  ActivityIndicator,
  Divider
} from "react-native-paper";
import { withNavigation, DrawerActions } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl
} from "react-native";
import TreeView from "react-native-final-tree-view";
import { Feather } from "@expo/vector-icons";
import AppBarComp from '../../components/appBarComp';
class OrganizasyonSemasi extends React.Component {
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
      "https://raw.githubusercontent.com/partitect/cobi/master/organizasyon.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: true,
          content: responseJson.data
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
        <AppBarComp subTitle="Organizasyon Şeması"/>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Headline style={styles.header}>ORGANİZASYON ŞEMASI</Headline>

          <Divider style={{ marginBottom: 10 }} />
          {this.state.isLoading ? (
            <TreeView
			collapsedItemHeight={45}
              ref={ref => (this.treeView = ref)}
              data={this.state.content}
              renderItem={(item, level) => (
                <View>
                  <Headline
                    style={{
                      marginLeft: 10 * level,
                      fontFamily: "quicksand",
					  padding: 5 * level,
          fontSize: 16,
                    }}
                  >
                    {item.collapsed !== null ? (
                      <Headline
                        style={{
                          fontFamily: "quicksand",
						  marginLeft:20
                        }}
                      >
                        {item.collapsed ? (
                          <Feather
                            name="chevron-right"
                            size={12}
                            color="green"
							iconStyle={{marginRight:20}}
                          />
                        ) : (
                          <Feather
                            name="chevron-down"
                            size={12}
                            color="green"
							iconStyle={{marginRight:20}}
                          />
                        )}
                      </Headline>
                    ) : (
                      <Feather name="circle" iconStyle={{marginRight:20}} size={12} color="green" />
                    )}
                    {item.name}
                  </Headline>
                </View>
              )}
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
    flexWrap: "wrap"
  },
  header: {
    fontSize: 18,
    textAlign: "center"
  }
});

export default withNavigation(OrganizasyonSemasi);
