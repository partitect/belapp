import React from 'react';
import { Appbar, Headline } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import mainStyles from '../../styles/styles';
import AppBarComp from '../../components/appBarComp';
class Ihaleler extends React.Component {
	constructor(props) {
		super(props);
	}
	_goBack = () => console.log('Went back');

	_onSearch = () => console.log('Searching');

	_onMore = () => console.log('Shown more');
	render() {
		return (
			<View>
				<AppBarComp subTitle="İhaleler"/>
       
			</View>
		);
	}
}
const styles = StyleSheet.create({
	mainContent: {
		padding: 10
		//arginBottom:120
	}
});

export default withNavigation(Ihaleler);
