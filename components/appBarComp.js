import React from 'react';
import { Appbar } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View} from 'react-native';


import GLOBALS from '../global/config';
import DefaultTheme from '../styles/DefaultTheme';
class AppBarComp extends React.PureComponent<Props> {
	constructor(props) {
		super(props);
	}
	_goBack = () => console.log('Went back');

	_onSearch = () => console.log('Searching');

	_onMore = () => console.log('Shown more');
	render() {
		return (
			<View>
				<Appbar.Header style={{backgroundColor:DefaultTheme.colors.primary,borderBottom:0}}>
					<Appbar.Action
						icon="menu"
						onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
					/>
					<Appbar.Content title={GLOBALS.BASE_NAME} subtitle={this.props.subTitle} />
					<Appbar.Action icon="search" onPress={this._onSearch} />
					<Appbar.Action icon="more-vert" onPress={this._onMore} />
				</Appbar.Header>
			</View>
		);
	}
}

export default withNavigation(AppBarComp);
