import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { Appbar, Drawer, List, Divider, BottomNavigation } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation'; // ⚠ you need the package 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import BaskandanMesaj from '../screens/Baskan/BaskandanMesaj';
import BaskanOzgecmis from '../screens/Baskan/BaskanOzgecmis';
import BaskanaMesaj from '../screens/Baskan/BaskanaMesaj';

import Hizmetler from '../screens/Hizmetler/Hizmetler';
import HizmetDetails from '../screens/Hizmetler/details';

import CografiYapi from '../screens/Kent/CografiYapi';
import Tarih from '../screens/Kent/Tarih';

import OrganizasyonSemasi from '../screens/Yonetim/OrganizasyonSemasi';
import MeclisUyeleri from '../screens/Yonetim/MeclisUyeleri';
import EncumenUyeleri from '../screens/Yonetim/EncumenUyeleri';
import ImarKomisyonu from '../screens/Yonetim/ImarKomisyonu';
import DenetimKomisyonu from '../screens/Yonetim/DenetimKomisyonu';
import PlanButceKomisyonu from '../screens/Yonetim/PlanButceKomisyonu';

import Haberler from '../screens/Icerik/Haberler';
import Duyurular from '../screens/Icerik/Duyurular';
import Icerikler from '../screens/Icerik/Icerikler';
import Details from '../screens/Icerik/details';
import HavaDurumuDetay from '../screens/Icerik/HavaDurumuScreen';


import FirmaDetails from '../screens/Firma/details';
class TabComp extends React.PureComponent {
	state = {
		index: 0,
		routes: [
			{ key: 'home', title: 'Anasayfa', icon: 'spa', color: '#ED1C24' },
			{
				key: 'haber',
				title: 'Haberler',
				icon: 'developer-board',
				color: '#ED1C24'
			},
			{
				key: 'duyuru',
				title: 'Duyurular',
				icon: 'announcement',
				color: '#ED1C24'
			},
			{
				key: 'icerik',
				title: 'İlanlar',
				icon: 'business-center',
				color: '#ED1C24'
			},
			{
				key: 'hizmet',
				title: 'Hizmetler',
				icon: 'local-florist',
				color: '#ED1C24'
			}
		]
	};

	_handleIndexChange = (index) => this.setState({ index });

	_renderScene = BottomNavigation.SceneMap({
		home: HomeScreen,
		haber: Haberler,
		duyuru: Duyurular,
		icerik: Icerikler,
		hizmet: Hizmetler
	});

	render() {
		return (
			<BottomNavigation
				barStyle={{ height: 54, border: 0 }}
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
		Ozgecmis: {
			screen: BaskanOzgecmis
		},
		BaskandanMesaj: {
			screen: BaskandanMesaj
		},
		Hizmetler: {
			screen: Hizmetler
		},
		CografiYapi: {
			screen: CografiYapi
		},
		Tarih: {
			screen: Tarih
		},
		OrganizasyonSemasi: {
			screen: OrganizasyonSemasi
		},
		MeclisUyeleri: {
			screen: MeclisUyeleri
		},
		EncumenUyeleri: {
			screen: EncumenUyeleri
		},
		ImarKomisyonu: {
			screen: ImarKomisyonu
		},
		DenetimKomisyonu: {
			screen: DenetimKomisyonu
		},
		PlanButceKomisyonu: {
			screen: PlanButceKomisyonu
		},
		Details: {
			screen: Details
		},
		HizmetDetails: {
			screen: HizmetDetails
		},
		FirmaDetails: {
			screen: FirmaDetails
		},
		HavaDurumuDetay: {
			screen: HavaDurumuDetay
		}
	},
	{
		contentComponent: (props) => (
			<ScrollView>
				<SafeAreaView
					forceInset={{
						top: 'always',
						horizontal: 'never'
					}}
				>
					<Drawer.Section>
						<View
							style={{
								flex: 1,
								padding: 10,
								width: 260,
								height: 96,
								marginBottom: 20
							}}
						>
							<Image
								resizeMode="contain"
								style={{ alignSelf: 'center', width: '100%', height: 96 }}
								source={{
									uri: 'http://www.amasya.bel.tr/UI/tr-TR/images/logo.png'
								}}
							/>
						</View>
						<Divider />
						<List.Item
							descriptionStyle={{ height: 0 }}
							title="Anasayfa"
							onPress={() => props.navigation.navigate('First')}
							left={(props) => <List.Icon {...props} icon="store-mall-directory" />}
						/>

						<List.Accordion
							title="Belediye Başkanı"
							left={(props) => <List.Icon {...props} icon="contacts" />}
						>
							<List.Item
								title="Başkandan Mesaj"
								onPress={() => props.navigation.navigate('BaskandanMesaj')}
							/>
							<List.Item
								title="Başkanın Özgeçmişi"
								onPress={() => props.navigation.navigate('Ozgecmis')}
							/>
							<List.Item
								title="Başkana Mesaj"
								onPress={() => props.navigation.navigate('BaskanaMesaj')}
							/>
						</List.Accordion>

						<List.Accordion
							title="Yönetim"
							left={(props) => <List.Icon {...props} icon="business-center" />}
						>
							<List.Item
								title="Organizasyon Şeması"
								onPress={() => props.navigation.navigate('OrganizasyonSemasi')}
							/>
							<List.Item
								title="Meclis Üyeleri"
								onPress={() => props.navigation.navigate('MeclisUyeleri')}
							/>
							<List.Item
								title="Encümen Üyeleri"
								onPress={() => props.navigation.navigate('EncumenUyeleri')}
							/>
							<List.Item
								title="İmar Komisyonu"
								onPress={() => props.navigation.navigate('ImarKomisyonu')}
							/>
							<List.Item
								title="Denetim Komisyonu"
								onPress={() => props.navigation.navigate('DenetimKomisyonu')}
							/>
							<List.Item
								title="Plan & Bütçe Komisyonu"
								onPress={() => props.navigation.navigate('PlanButceKomisyonu')}
							/>
						</List.Accordion>

						<List.Accordion title="Kent Bilgisi" left={(props) => <List.Icon {...props} icon="map" />}>
							<List.Item title="Coğrafi Yapı" onPress={() => props.navigation.navigate('CografiYapi')} />
							<List.Item title="Amasya Tarihi" onPress={() => props.navigation.navigate('Tarih')} />
						</List.Accordion>
						<List.Item
							descriptionStyle={{ height: 0 }}
							title="Hizmetler"
							onPress={() => props.navigation.navigate('Hizmetler')}
							left={(props) => <List.Icon {...props} icon="local-florist" />}
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
