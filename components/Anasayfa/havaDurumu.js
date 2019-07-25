import * as React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  RefreshControl,
  Text,
  ImageBackground
} from "react-native";
import {
  ActivityIndicator,
  TouchableRipple,
  Colors,
  Headline,
  withTheme
} from "react-native-paper";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient'

import moment from "moment";

var bugun = moment().format("YYYY-MM-DD");

class HavaDurumu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      isLoading: false,
      content: [],
      refreshing: false
    };
  }

  onPress(title, id) {
    this.props.navigation.navigate("detay", {
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

  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    return fetch(
      "https://api.darksky.net/forecast/91aefa74a837c7528f26afe6f0b69461/40.6565,35.8373?units=si&lang=tr"
    )
      .then(response => response.json())
      .then(responseJson => {
        dataJson = responseJson;

      
        this.setState({
          isLoading: true,
          content: dataJson
        });
      })
      .catch(error => {});
  };

  render() {
    const { colors } = this.props.theme;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {this.state.isLoading ? (
          <View style={styles.content}>
            
             
                
                  <TouchableRipple
                    onPress={() => this.onPress(data.title, data.id)}
                    style={{
                      height: Dimensions.get("window").width / 2,
                      width: "100%",
                      padding: 5
                    }}
                  >
                    <ImageBackground
                      source={{ uri: 'https://image.freepik.com/free-photo/cloud-blue-sky_1232-3108.jpg' }}
                      imageStyle={{ borderRadius: 5 }}
                      resizeMode="cover"
                      style={{ width: "100%", height: "100%", flex: 1 }}
                    >
                      <LinearGradient
                        colors={[
                          "rgba(246,243,255,.1)",
                          "rgba(246,243,255,.1)",
                          "rgba(246,243,255,.1)",
                          "rgba(0,0,0,.5)"
                        ]}
                        style={styles.overlay}
                      >
                        <Headline
                          style={[styles.imgText]}
                        >
                          {this.state.content.currently.summary}
                        </Headline>
                      </LinearGradient>
                    </ImageBackground>
                  </TouchableRipple>
                
             
             
           
          </View>
        ) : (
          <ActivityIndicator animating={true} color={Colors.red800} />
        )}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(98,0,238,.2)",
    borderRadius: 5
  },
  item: {
    height: Dimensions.get("window").width / 2,
    width: "50%",
    padding: 4
  },
  imgText: {
    color: "#fff",
    paddingHorizontal: 5,
    fontSize: 20,
    position: "absolute",
    bottom: 0
  },
  subContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5
  }
});
export default withNavigation(withTheme(HavaDurumu));
