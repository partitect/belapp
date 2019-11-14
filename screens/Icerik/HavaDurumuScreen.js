import React from 'react';
import { Appbar, Headline, ActivityIndicator, List, IconButton } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Image, StyleSheet, ScrollView, RefreshControl, Dimensions, StatusBar } from 'react-native';
import AppBarComp from '../../components/appBarComp';

import moment from 'moment';

var bugun = moment().format('YYYY-MM-DD');
const randomColors = [
	{
		bgColor: 'rgba(8, 10, 82, 1)',
		textColor: '#eb2188'
	},
	{
		bgColor: 'rgba(22, 27, 33, 1)',
		textColor: '#f4a950'
	},
	{
		bgColor: 'rgba(255, 230, 124, 1)',
		textColor: '#295f2d'
	},
	{
		bgColor: 'rgba(138, 170, 229, 1)',
		textColor: '#fff'
	},
	{
		bgColor: 'rgba(236, 139, 94, 1)',
		textColor: '#141a46'
	},
	{
		bgColor: 'rgba(36, 54, 101, 1)',
		textColor: '#8bd8bd'
	},
	{
		bgColor: 'rgba(29, 27, 27, 1)',
		textColor: '#ec4d37'
	},
	{
		bgColor: 'rgba(251, 234, 235, 1)',
		textColor: '#2f3c7e'
	},
	{
		bgColor: 'rgba(60, 26, 91, 1)',
		textColor: '#fff748'
	},
	{
		bgColor: 'rgba(43, 50, 82, 1)',
		textColor: '#fad744'
	},
	{
		bgColor: 'rgba(240, 160, 124, 1)',
		textColor: '#4a274f'
	},
	{
		bgColor: 'rgba(72, 49, 212, 1)',
		textColor: '#ccf381'
	},
	{
		bgColor: 'rgba(41, 40, 38, 1)',
		textColor: '#f9d342'
	}
];

class HavaDurumuDetay extends React.Component {
	constructor(props) {
		super(props);
		let { params } = this.props.navigation.state;
		this.title = params ? params.title : 1;
		this.id = params ? params.id : 1;
		this.onPress = this.onPress.bind(this);
		this.state = {
			isLoading: false,
			content: null,
			refreshing: false
		};
	}
	onPress(title, id) {
		this.props.navigation.navigate('Details', {
			title: title,
			id: id
		});
	}
	_onRefresh = () => {
		this.setState({ refreshing: true });
		this.makeRemoteRequest().then(() => {
			this.setState({ refreshing: false });
		});
	};
	makeRemoteRequest = () => {
		return fetch(
			'https://api.darksky.net/forecast/91aefa74a837c7528f26afe6f0b69461/40.6565,35.8373?units=si&lang=tr'
		)
			.then((response) => response.json())
			.then((responseJson) => {
				dataJson = responseJson;

				this.setState({
					isLoading: true,
					content: dataJson,
					icon: dataJson.currently.icon
				});
			})
			.catch((error) => {});
	};
	componentDidMount() {
		this.makeRemoteRequest();
	}

	_goBack = () => console.log('Went back');

	_onSearch = () => console.log('Searching');

	_onMore = () => console.log('Shown more');
	render() {
		var rColor = '';
		rColor = randomColors[Math.floor(Math.random() * randomColors.length)];
		//console.log(this.state.content);
		function dayOfWeekAsString(dayIndex) {
			return [ 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar' ][dayIndex];
		}
		return (
			<View style={{ flex: 1 }}>
				

				<ScrollView
					refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
				>
					{this.state.isLoading ? (
						<View style={[ styles.contentView, { backgroundColor: rColor.bgColor } ]}>
							<Image
								style={styles.wImage}
								source={{
									uri:
										'https://raw.githubusercontent.com/partitect/cobi/master/' +
										this.state.icon +
										'.png'
								}}
							/>
							<IconButton style={styles.backButton}
								icon="arrow-back"
								color={rColor.textColor}
								size={30}
								onPress={() => this.props.navigation.goBack()}
							/>
							<Headline style={[ styles.belText, { color: rColor.textColor } ]}>Amasya'da Bugün</Headline>
							<Headline style={[ styles.currentlyText, { color: rColor.textColor } ]}>
								{this.state.content.currently.summary}
							</Headline>
							<Headline style={[ styles.temperatureText, { color: rColor.textColor } ]}>
								Sıcaklık {parseInt(this.state.content.currently.temperature).toFixed(0)} {'\u2103'}
							</Headline>
							<Headline style={[ styles.dailyText, { color: rColor.textColor } ]}>
								{this.state.content.daily.summary}
							</Headline>
							<View style={styles.weekContent}>
								{this.state.content.daily.data.map((data, i, arr) => {
									//console.log(dayOfWeekAsString((i+3)%6));
									const App = () => {
										return (
											<List.Item
												style={{ padding: 0 }}
												titleStyle={{ color: rColor.textColor }}
												descriptionStyle={{ color: rColor.textColor }}
												title={dayOfWeekAsString((i + 2) % 7)}
												description={data.summary}
												left={() => <List.Icon icon="today" color={rColor.textColor} />}
											/>
										);
									};
									return <App key={i} />;
								})}
							</View>
						</View>
					) : (
						<ActivityIndicator animating={true} color="red" />
					)}
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	mainContent: {
		padding: 10,
		height: Dimensions.get('window').height
	},
	contentView: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		padding: 10
	},
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		borderRadius: 5
	},
	item: {
		height: Dimensions.get('window').width / 2,
		width: '50%',
		padding: 4
	},
	belText: {
		color: '#fff',
		paddingHorizontal: 10,
		position: 'absolute',
		top: 60,
		fontFamily: 'opensans-bold',
		fontSize: 18
	},
	currentlyText: {
		color: '#fff',
		paddingHorizontal: 10,
		position: 'absolute',
		top: 80,
		fontFamily: 'quicksand-bold',
		fontSize: 13
	},
	temperatureText: {
		color: '#fff',
		paddingHorizontal: 10,
		position: 'absolute',
		top: 140,
		fontFamily: 'quicksand-bold',
		fontSize: 15
	},
	dailyText: {
		color: '#fff',
		paddingHorizontal: 10,
		position: 'absolute',
		bottom: 10,
		fontFamily: 'quicksand',
		fontSize: 14,
		//width:Dimensions.get('window').width / 1.3,
		lineHeight: 22
	},
	subContainer: {
		paddingVertical: 10,
		paddingHorizontal: 5
	},
	wImage: {
		width: 120,
		height: 120,
		position: 'absolute',
		top: 25,
		right: 10
	},
	weekContent: {
		marginTop: 180
	},
	backButton:{
		position: 'absolute',
		top: 25,
		left:0
	}
});

export default withNavigation(HavaDurumuDetay);
