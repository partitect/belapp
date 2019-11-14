import React from "react";
import { Headline, TouchableRipple,Subheading } from "react-native-paper";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'




export class HCards extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
	this.onPress = this.props.OnPress.bind(this);
  }
  onPress(title, id, screen,tur) {
    this.props.navigation.navigate(screen, {
      title: title,
	  id: id,
	  tur: tur
	});
	
  }
  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.content}>
          {this.props.data.map((data, i, arr) => {
          let wdt = 0;
		  let img = "";
		  if (arr.length - 1 === i) {
			if (i % 2 == 0) {
			  wdt = "100%";
			} else {
			  wdt = "50%";
			}
		  } else {
			wdt = "50%";
		  }
            if (data.image == "null") {
              img =
                "https://github.com/partitect/cobi/blob/master/null-img1.png";
            } else {
              img = data.image;
            }
            const App = () => {
              return (
                <TouchableRipple
                  onPress={() =>
                    this.onPress(data.title, data.id, this.props.navScreen,this.props.Tur)
                  }
                  style={{
                    height: Dimensions.get("window").width / 2,
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
                        "rgba(246,243,255,.1)",						
                        "rgba(0,0,0,.5)",
						"rgba(0,0,0,.8)",
						"rgba(0,0,0,1)"
                      ]}
                      style={styles.overlay}
                    >
                      <Headline
                        style={[styles.imgText]}
                      >
                        {data.title}
                      </Headline>
                      
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
    fontSize: 18,
	position: "absolute",
	fontFamily:'quicksand',
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
