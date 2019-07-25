import React from 'react';
import { Appbar, Headline } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import mainStyles from '../styles/styles';
import AppBarComp from '../components/appBarComp';
import GLOBALS from '../global/config';
import Haberler from '../components/Anasayfa/haberler';
import Duyurular from '../components/Anasayfa/duyurular';
import GununEczanesi from '../components/Anasayfa/gununEczanesi';
import HavaDurumu from '../components/Anasayfa/havaDurumu';

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	_goBack = () => console.log('Went back');

	_onSearch = () => console.log('Searching');

	_onMore = () => console.log('Shown more');
	render() {
		return (
			<View>
				<AppBarComp subTitle="Anasayfa" />
				<ScrollView style={styles.mainContent}>
					<View style={{ flex: 1 }}>
						<Headline style={[ styles.vHeader ]}>Amasya Bugün</Headline>
						<HavaDurumu />
						<Headline style={[ styles.vHeader ]}>Belediyemizden Haberler</Headline>
						<Haberler />
						<Headline style={[ styles.vHeader ]}>Nöbetçi Eczaneler</Headline>
						<GununEczanesi />
						<Headline style={[ styles.vHeader ]}>Belediyemizden Duyurular</Headline>
						<Duyurular />
					</View>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	mainContent: {
		marginBottom: 100
	},
	vHeader: {
		fontWeight: 'normal',
		fontFamily: 'opensans-bold',
		padding: 7,
		backgroundColor: '#00A651',
		color: '#fff'
	}
});

export default withNavigation(HomeScreen);
