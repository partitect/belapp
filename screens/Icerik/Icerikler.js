import React from 'react';
import { Appbar, Headline, ActivityIndicator, Divider } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { HCards } from '../../components/haberCard';
import AppBarComp from '../../components/appBarComp';
import { TabView, SceneMap } from 'react-native-tab-view';
import Etkinlikler from './Etkinlikler';
import Ihaleler from './ihaleler';

const FirstRoute = () => <View style={[ styles.scene, { backgroundColor: '#fff' } ]} />;

const SecondRoute = () => <View style={[ styles.scene, { backgroundColor: '#fff' } ]} />;

class Icerikler extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0,
			routes: [ { key: 'first', title: 'Etkinlikler' }, { key: 'second', title: 'İhaleler' } ]
		};
	}
	onPress(title, id) {
		this.props.navigation.navigate('Details', {
			title: title,
			id: id
		});
	}
	
	_goBack = () => console.log('Went back');

	_onSearch = () => console.log('Searching');

	_onMore = () => console.log('Shown more');
	render() {
		//console.log(this.state.content);
		return (
			<View style={{ flex: 1 }}>
				<AppBarComp subTitle="Haberler" />
				
					
				
						<TabView
						navigationState={this.state}
						renderScene={SceneMap({
						  first: Etkinlikler,
						  second: Ihaleler,
						})}
						onIndexChange={index => this.setState({ index })}
						initialLayout={{ width: Dimensions.get('window').width }}
					  />
				
				
			</View>
		);
	}
}
const styles = StyleSheet.create({
	scene: {
		flex: 1,
	  },
	mainContent: {
		padding: 10
	},
	content: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	header: {
		fontSize: 18,
		textAlign: 'center'
	},
	vHeader: {
		borderBottomColor: 'rgba(0,0,0,.1)',
		borderBottomWidth: 1,
		fontWeight: 'normal',
		fontFamily: 'opensans',
		marginBottom: 5,
		paddingBottom: 5,
		paddingHorizontal: 10
	}
});

export default withNavigation(Icerikler);
