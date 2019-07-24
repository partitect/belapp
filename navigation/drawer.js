import React from "react";
import { Text, Image, ScrollView, View } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { DrawerActions } from "react-navigation";
import { Appbar, Drawer, List, Divider,BottomNavigation } from "react-native-paper";
import { SafeAreaView } from "react-navigation"; // ⚠ you need the package 'react-navigation'
import HomeScreen from "../screens/HomeScreen";
import BaskandanMesaj from "../screens/Baskan/BaskandanMesaj";
import BaskanOzgecmis from "../screens/Baskan/BaskanOzgecmis";
import BaskanaMesaj from "../screens/Baskan/BaskanaMesaj";


class TabComp extends React.PureComponent {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Anasayfa', icon: 'spa' },
      { key: 'haber', title: 'Haberler', icon: 'developer-board' },
      { key: 'duyuru', title: 'Duyurular', icon: 'announcement' },
      { key: 'etkinlik', title: 'Etkinlikler', icon: 'event-note' },

      
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    haber: BaskandanMesaj,
    duyuru: BaskandanMesaj,
    etkinlik: BaskandanMesaj,

  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const Menu = createDrawerNavigator(
  {
    First: {
      screen: TabComp
    },
    Second: {
      screen: BaskanOzgecmis
    }
  },
  {
    contentComponent: props => (
      <ScrollView>
        <SafeAreaView
          forceInset={{
            top: "always",
            horizontal: "never"
          }}
        >
          <Drawer.Section>
            <View style={{ flex: 1, padding: 10, width: 260, height: 96,marginBottom:20 }}>
              <Image
                resizeMode="contain"
                style={{ alignSelf: "center", width: "100%", height: 96 }}
                source={{
                  uri: "http://www.amasya.bel.tr/UI/tr-TR/images/logo.png"
                }}
              />
            </View>
            <Divider />
            <List.Item descriptionStyle={{height:0}}
              title="Anasayfa"
              onPress={() => props.navigation.navigate("First")}
              left={props => (
                <List.Icon {...props} icon="store-mall-directory" />
              )}
            />
            
              <List.Accordion
                title="Belediye Başkanı"
                left={props => <List.Icon {...props} icon="contacts" />}
              >
                <List.Item
                  title="Başkandan Mesaj"
                  onPress={() => props.navigation.navigate("Second")}
                />
                <List.Item
                  title="Başkanın Özgeçmişi"
                  onPress={() => props.navigation.navigate("First")}
                />
                <List.Item title="Başkana Mesaj" />
              </List.Accordion>
            
              <List.Accordion
                title="Yönetim"
                left={props => <List.Icon {...props} icon="business-center" />}
              >
                <List.Item
                  title="Organizasyon Şeması"
                  onPress={() => props.navigation.navigate("Second")}
                />
                <List.Item
                  title="Meclis Üyeleri"
                  onPress={() => props.navigation.navigate("First")}
                />
                <List.Item
                  title="Encümen Üyeleri"
                  onPress={() => props.navigation.navigate("First")}
                />
                <List.Item
                  title="İmar Komisyonu"
                  onPress={() => props.navigation.navigate("First")}
                />
                <List.Item
                  title="Denetim Komisyonu"
                  onPress={() => props.navigation.navigate("First")}
                />
                <List.Item
                  title="Plan & Bütçe Komisyonu"
                  onPress={() => props.navigation.navigate("First")}
                />
              
              </List.Accordion>
            
              <List.Accordion
                title="Kent Bilgisi"
                left={props => <List.Icon {...props} icon="map" />}
              >
                <List.Item
                  title="Coğrafi Yapı"
                  onPress={() => props.navigation.navigate("Second")}
                />
                <List.Item
                  title="Amasya Tarihi"
                  onPress={() => props.navigation.navigate("First")}
                />
              </List.Accordion>
              <List.Item descriptionStyle={{height:0}}
              title="Hizmetler"
              onPress={() => props.navigation.navigate("First")}
              left={props => (
                <List.Icon {...props} icon="local-florist" />
              )}
            />
          </Drawer.Section>
        </SafeAreaView>
      </ScrollView>
    )
  }
);

const AppNav = createAppContainer(Menu);

export default class DrawerComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppNav />;
  }
}
