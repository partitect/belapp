import React from 'react';
import { Appbar, Headline } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import mainStyles from '../styles/styles';

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
				<Appbar.Header>
					<Appbar.Action
						icon="menu"
						onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
					/>
					<Appbar.Content title="Amasya Belediyesi" subtitle="Anasayfa" />
					<Appbar.Action icon="search" onPress={this._onSearch} />
					<Appbar.Action icon="more-vert" onPress={this._onMore} />
				</Appbar.Header>
       
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

export default withNavigation(HomeScreen);
