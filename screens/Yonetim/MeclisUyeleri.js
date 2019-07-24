import React from 'react';
import { Appbar, Headline } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import mainStyles from '../../styles/styles';
import HTML from 'react-native-render-html';


class MeclisUyeleri extends React.Component {
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
					<Appbar.Content title="Amasya Belediyesi" subtitle="Tarihi Yapı" />
					<Appbar.Action icon="search" onPress={this._onSearch} />
					<Appbar.Action icon="more-vert" onPress={this._onMore} />
				</Appbar.Header>

				<ScrollView style={styles.mainContent}>
				<Headline> 2019-2024 YILLARI DÖMEMİNE AİT BELEDİYE MECLİS ÜYELERİ LİSTESİ</Headline>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	mainContent: {
		padding: 10,
		marginBottom:90
	}
});

export default withNavigation(MeclisUyeleri);
