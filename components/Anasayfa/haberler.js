import * as React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Image,
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

const randomColors = [
  {
    bgColor: "rgba(8, 10, 82, 1)",
    lnColor: "rgba(8, 10, 82, .6)",
    textColor: "#eb2188"
  },
  {
    bgColor: "rgba(22, 27, 33, 1)",
    lnColor: "rgba(22, 27, 33, .6)",
    textColor: "#f4a950"
  },
  {
    bgColor: "rgba(255, 230, 124, 1)",
    lnColor: "rgba(255, 230, 124, .6)",
    textColor: "#295f2d"
  },
  {
    bgColor: "rgba(138, 170, 229, 1)",
    lnColor: "rgba(138, 170, 229, .6)",
    textColor: "#fff"
  },
  {
    bgColor: "rgba(236, 139, 94, 1)",
    lnColor: "rgba(236, 139, 94, .6)",
    textColor: "#141a46"
  },
  {
    bgColor: "rgba(36, 54, 101, 1)",
    lnColor: "rgba(36, 54, 101, .6)",
    textColor: "#8bd8bd"
  },
  {
    bgColor: "rgba(29, 27, 27, 1)",
    lnColor: "rgba(29, 27, 27, .6)",
    textColor: "#ec4d37"
  },
  {
    bgColor: "rgba(251, 234, 235, 1)",
    lnColor: "rgba(251, 234, 235, .6)",
    textColor: "#2f3c7e"
  },
  {
    bgColor: "rgba(60, 26, 91, 1)",
    lnColor: "rgba(60, 26, 91, .6)",
    textColor: "#fff748"
  },
  {
    bgColor: "rgba(43, 50, 82, 1)",
    lnColor: "rgba(43, 50, 82, .6)",
    textColor: "#fad744"
  },
  {
    bgColor: "rgba(240, 160, 124, 1)",
    lnColor: "rgba(240, 160, 124, .6)",
    textColor: "#4a274f"
  },
  {
    bgColor: "rgba(72, 49, 212, 1)",
    lnColor: "rgba(72, 49, 212, .6)",
    textColor: "#ccf381"
  },
  {
    bgColor: "rgba(41, 40, 38, 1)",
    lnColor: "rgba(41, 40, 38, .6)",
    textColor: "#f9d342"
  }
];

class Haberler extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      isLoading: false,
      content: null
    };
  }

  onPress(title, id) {
    this.props.navigation.navigate("kesifAlt", {
      title: title,
      id: id
    });
  }
  makeRemoteRequest = () => {
    //http://hsahiner.name.tr/ke/admin.php/kentrehberservis?kullanici=telat&sifre=852?987!&oneCikanlar
    return fetch(
      "https://raw.githubusercontent.com/partitect/cobi/master/haberler.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: true,
          content: responseJson.haberler
        });
      })
      .catch(error => {});
  };
  componentDidMount() {
    this.makeRemoteRequest();
  }
  render(number, title, type) {
    const { colors } = this.props.theme;

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        decelerationRate={0}
        snapToInterval={Dimensions.get("window").width / 1.2 - 50}
        snapToAlignment={"center"}
      >
        {this.state.isLoading ? (
          <View style={styles.content}>
            {this.state.content.map((data, i, arr) => {
              var rColor = "";
              rColor =
                randomColors[Math.floor(Math.random() * randomColors.length)];
              const App = () => {
                return (
                  <TouchableRipple
                    onPress={() => this.onPress(data.title, data.id)}
                    key={i}
                    style={{
                      height: 250,
                      width: Dimensions.get("window").width / 1.2,
                      padding: 4
                    }}
                  >
                    <ImageBackground
                      source={{ uri: data.image }}
                      imageStyle={{ borderRadius: 5 }}
                      resizeMode="cover"
                      style={{ width: "100%", height: "100%", flex: 1 }}
                    >
                      <LinearGradient
                        colors={[
                          "transparent",
						  "transparent",
						  "transparent",
						  "transparent",
                          rColor.lnColor,
                          rColor.bgColor
                        ]}
                        style={styles.overlay}
                      >
                        <View style={styles.textView}>
                          <Text
                            style={[
                              styles.imgText,
                              {
                                color: rColor.textColor,
                                fontFamily: "quicksand-bold",
                                fontWeight: "normal"
                              }
                            ]}
                          >
                            {data.title}
                          </Text>
                        </View>
                      </LinearGradient>
                    </ImageBackground>
                  </TouchableRipple>
                );
              };
              return <App key={i} />;
            })}
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
  textView: {
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 5,
    flexDirection: "column"
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
    fontWeight: "bold"
  },
  subText: {
    color: "#fff",
    paddingHorizontal: 5,
    fontSize: 14,
    fontWeight: "bold"
  },
  subContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5
  }
});

export default withNavigation(withTheme(Haberler));
