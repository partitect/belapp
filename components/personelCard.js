import React from "react";
import { Headline, TouchableRipple,Subheading } from "react-native-paper";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'



export class PCards extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.content}>
          {this.props.data.map((data, i, arr) => {
            let wdt = 0;
            let img = "";
            if (data.gorev === "Belediye Başkanı") {
                wdt = "100%";
            } else {
              wdt = "50%";
            }
            if (data.resim == "null") {
              img =
                "https://github.com/partitect/cobi/blob/master/null-img1.png";
            } else {
              img = data.resim;
            }
            const App = () => {
              return (
                <TouchableRipple
                  onPress={() =>
                    this.onPress(data.ad, data.id, this.props.navScreen)
                  }
                  style={{
                    height: Dimensions.get("window").width / 1.4,
                    width: wdt,
                    padding: 4
                  }}
                >
                  <ImageBackground
                    source={{ uri: img }}
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
                        {data.ad}
                      </Headline>
                      <Subheading style={[styles.gorevText]}>{data.gorev}</Subheading>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableRipple>
              );
            };
            return <App key={i} />;
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 4
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0,0,238,.1)",
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
  gorevText: {
    color: "#fff",
    paddingHorizontal: 5,
    fontSize: 20,
    position: "absolute",
    top: 0
  },
  subContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5
  }
});