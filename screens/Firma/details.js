import * as React from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	ImageBackground,
	Dimensions,
	Modal,
	StatusBar,
	AsyncStorage
} from 'react-native';
import {
	ActivityIndicator,
	Colors,
	Subheading,
	Headline,
	Text,
	Button,
	List,
	withTheme,
	DefaultTheme,
	DarkTheme,
	TouchableRipple,
	Divider
} from 'react-native-paper';
import StickyHead from '../../components/publicComponents/stickyHeader';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const img = '';

class FirmaDetails extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
		let { params } = this.props.navigation.state;
		this.title = params ? params.title : 1;
		this.id = params ? params.id : 1;

		this.state = {
			isLoading: false,
			datas: null,
			kampanyaModalVisible: false,
			menuModalVisible: false,
			medyaModalVisible: false,
			theme: DefaultTheme
		};
	}

	componentWillMount() {
		fetch('https://raw.githubusercontent.com/partitect/cobi/master/amasya_eczane.json')
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({ datas: responseJson.eczaneler[0], isLoading: true });
			})
			.catch((error) => {});
		console.log(this.state.datas);
	}
	async componentDidMount() {
		try {
			const prefString = await AsyncStorage.getItem('preferences');
			const preferences = JSON.parse(prefString);

			if (preferences) {
				// eslint-disable-next-line react/no-did-mount-set-state
				this.setState((state) => ({
					theme: preferences.theme === 'dark' ? DarkTheme : DefaultTheme,
					rtl: typeof preferences.rtl === 'boolean' ? preferences.rtl : state.rtl
				}));
			}
		} catch (e) {
			// ignore error
		}
	}

	renderContent = () => (
		<View
			style={{
				flex: 1,
				padding: 15,
				backgroundColor: this.state.theme.colors.background
			}}
		>
			<Text style={styles.infoTitle}>{this.state.datas.name}</Text>
			<Text style={styles.infoTitle}>Buraya Eczane veya firmalarla ilgili bilgiler gelecek. Harita konumu, telefon, adres, hizmetleri v.s.</Text>

		</View>
	);
	render() {
		return (
			<View flex={1}>
				 
				{this.state.isLoading ? (
					<StickyHead
						Title={this.state.datas.name}
						Image="https://image.freepik.com/free-photo/cut-out-medicament-drug-doctor-medical_1134-729.jpg"
						Content={this.renderContent}
					/>
				) : (
					<ActivityIndicator animating={true} color={Colors.red800} />
				)}
			</View>
		);
	}
	static title = this.title;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#C5D5E4',
		position: 'relative'
	},
	mapcontainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex: 1
	},
	map: {
		...StyleSheet.absoluteFillObject,
		flex: 1
	},
	bubble: {
		backgroundColor: 'rgba(255,255,255,0.7)',
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20
	},
	latlng: {
		width: 200,
		alignItems: 'stretch'
	},
	button: {
		width: 80,
		paddingHorizontal: 12,
		alignItems: 'center',
		marginHorizontal: 10
	},
	buttonContainer: {
		flexDirection: 'row',
		marginVertical: 20,
		backgroundColor: 'transparent'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(98,0,238,.2)',
		borderRadius: 5
	},
	infoBox: {
		color: '#fff',
		textAlign: 'center',
		fontFamily: 'quicksand',
		fontSize: 14
	},
	hizmetInfo: {
		flex: 1,
		width: 120,
		height: 120,
		marginRight: 5,
		backgroundColor: '#7768AE',
		borderRadius: 5,
		alignItems: 'center',
		padding: 5
	},
	kampanyaInfo: {
		flex: 1,
		width: 300,
		height: 250,
		marginRight: 5,
		backgroundColor: '#E15554',
		borderRadius: 5,
		alignItems: 'center',
		padding: 5
	},
	imgText: {
		color: '#fff',
		paddingHorizontal: 5,
		fontSize: 20,
		position: 'absolute',
		bottom: 0,
		fontFamily: 'quicksand'
	},
	priceText: {
		color: '#000',
		paddingHorizontal: 5,
		fontSize: 22,
		fontFamily: 'quicksand'
	},
	infoTitle: {
		marginVertical: 10,
		fontSize: 30,
		fontFamily: 'quicksand-bold'
	},
	subContainer: {
		paddingVertical: 10,
		paddingHorizontal: 5,
		marginBottom: 50
	},
	bottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0
	},
	row: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	chip: {
		margin: 2
	}
});
export default withTheme(FirmaDetails);
