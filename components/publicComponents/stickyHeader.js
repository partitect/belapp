import React, { Component } from 'react'
import {
  Dimensions,
  TouchableOpacity,
  Platform,
  View,StyleSheet
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReactNativeParallaxHeader from './parallaxHeader';
const SCREEN_HEIGHT=0;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: '#FAFFFD',
    fontWeight: 'normal',
    fontSize: 16,
    position:'absolute',
    bottom:10,
    fontFamily:'opensans',

  },
  aSnack:{
    position: 'absolute',
    bottom:25,
    left:0
  }
});
 
class StickyHead extends Component {
  state = {
    snackVisible: false,
  };

  setSnackVisible(visible) {
    this.setState({snackVisible: visible});
  }
renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => this.props.navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconRight}   onPress={() => this.setSnackVisible(true)}>
        <Icon name="favorite" size={25} color={this.state.snackVisible ? 'red' : 'white'} />
      </TouchableOpacity>
      
    </View>
  </View>
);
render() {
  const { visible } = this.state;
  let headerImage = "";
  if(this.props.Image == "null"){
      headerImage = "https://github.com/partitect/cobi/blob/master/null-img1.png";
  }
  else{
    headerImage = this.props.Image;
  }
  return (
    <View style={styles.container}>
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={350}
        extraScrollHeight={20}
        navbarColor="#6200ee"
        title={this.props.Title}
        titleStyle={styles.titleStyle}
        backgroundImage={{uri:headerImage}}
        backgroundImageScale={1.2}
        renderNavBar={this.renderNavBar}
        renderContent={this.props.Content}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
      />
      <Snackbar style={styles.aSnack}
          visible={this.state.snackVisible}
          onDismiss={() => this.setSnackVisible(false)}
          action={{
            label: 'Kapat',
            onPress: () => {
              // Do something
            },
          }}
          duration={Snackbar.DURATION_SHORT}
        >
           {this.state.snackVisible ? 'Firma Favorilerinize Eklendi' : 'Firma Favorilerinizden Çıkartıldı!'}
           
        </Snackbar>
    </View>
  );
}
}
export default withNavigation(StickyHead);