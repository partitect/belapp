import React from 'react';
import {Appbar, Headline, Subheading} from "react-native-paper";
import {withNavigation, DrawerActions} from "react-navigation";
import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import mainStyles from '../../styles/styles';
import AppBarComp from '../../components/appBarComp';
class BaskandanMesaj extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
       <AppBarComp subTitle="Başkanın Mesajı"/>
        <ScrollView style={styles.mainContent}>

          <Image
            style={{
            width: '100%',
            height: 300
          }}
            source={{
            uri: 'http://www.amasya.bel.tr/Files/mehmet-sari/baskan-ozgecmis-resim-01.png'
          }}/>
          <Headline style={mainStyles.header}>Başkandan Mesaj</Headline>
          <Text style={mainStyles.paragraph}>
            Başkanın Mesajı
          </Text>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContent: {
    padding: 10,
    marginBottom: 120
  },
});

export default withNavigation(BaskandanMesaj);