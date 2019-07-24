import React from 'react';
import { Appbar, Headline } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppBarComp from '../components/AppBarComp';
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

				<ScrollView style={styles.mainContent}>
					<Headline style={styles.header}>AMASYA' NIN TARİHİ</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{ uri: 'http://www.amasya.bel.tr/Files/banner/Ana_Banner/amasya_semaver.jpg' }}
					/>
					<Text style={mainStyles.paragraph}>
						Yeşilırmak vadisi Harşena Dağı eteklerine kurulan Amasya, 7 bin yılın üzerindeki eski tarihi
						boyunca bilim adamları, sanatkarlar, şairler yetiştirmiş, Osmanlı şehzadelerinin eğitim gördüğü,
						Dünyanın en güzel Misket elması, kirazı, şeftalisi ve bamyasının üretildiği, gezip görülecek pek
						çok tarihi ve doğal güzelliği bulunan ilginç bir şehirdir. Milli Mücadelenin temellerinin
						atıldığı Kurtuluş savaşının ilk önemli adımını teşkil eden Amasya Genelge’sinin 22 Haziran
						1919’da okunduğu kent, krallık başkentliği yapmış tarihi ve doğal güzellikleriyle önemli
						şehirlerimizden biridir.
					</Text>
					<Headline style={styles.header}>AMASYA KALESİ</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{ uri: 'http://www.amasyakulturturizm.gov.tr/Resim/263551,kale1jpg.png?0' }}
					/>
					<Text style={mainStyles.paragraph}>
						Harşane Dağı adlı dik kayalıklar üzerindedir. Harşena Kalesi adıyla da bilinir. Denizden 700,
						Yeşilırmak'tan ise 300 metre yüksekte bulunmaktadır. azı tarihçilere göre kaleyi Pontus Kralı
						Mithridates yaptırmıştır. Bazılarına göre ise Kumandan Karsan veya Harsana yaptırdığı için kale
						Harşana / Harşena ismini almıştır. Kalenin Belkıs, Saray, Maydonos ve Meydan adlarına dört
						kapısı, kalede Cilanbolu adı verilen ve kalenin orta yerinde yüksekçe bir yerden kayaya oyulmuş
						150 basamakla aşağıya inilen 8 metre çapında bir dehliz, sarnıç, zindan bulunmaktadır. Kaleden
						70 metre aşağıda Yeşilırmağa ve kral mezarlarına kadar uzanan M.Ö. III. yüzyıla ait merdivenli
						yer altı yolu, burç ve cami kalıntıları vardır.
					</Text>
					<Headline style={styles.header}>AYNALI MAĞARA</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{ uri: 'https://www.gezilesiyer.com/wp-content/uploads/2015/11/aynali-magara-03.jpg' }}
					/>
					<Text style={mainStyles.paragraph}>
						Şehir merkezine 3,3 km uzaklıktadır. Kaya mezarlarının en iyi işlenmiş ve tamamlanmış olanıdır.
						Yerden dört basamakla çıkılan mezar düz bir kayaya oyulmuştur. Genişliği 9,8 metre yüksekliği 13
						metre'dir. Mağaranın dış cephe yüzeyi perdahlanarak parlatılmıştır. Buraya Aynalı Mağara
						denmesinin nedeni de, güneş vurduğu zaman mağaranın cephesinin parlamasıdır. M.Ö. 2. yy da
						Helenistik çağda Amasya’da yaşamış Mitra Rahibi TES’in anıtsal mezarıdır. Mağaranın içinin çok
						geniş olması ve duvarlarda yer alan renkli resimler ve alınlığında yazan “Büyük Rahip Tes”
						yazısı bu düşünceyi destekler. Hz. İsa’nın on iki havarisinden birinin, Hristiyanlığı bu
						mağarada yaydığı da rivayet edilir.
					</Text>
					<Headline style={styles.header}>ALÇAK KÖPRÜ</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{
							uri:
								'http://40dk.com/v2/wp-content/uploads/2017/07/amasya-al%C3%A7ak-k%C3%B6pr%C3%BC-01.jpg'
						}}
					/>
					<Text style={mainStyles.paragraph}>
						Roma döneminde, zamanın kent merkezi durumundaki kale ve çevresini Yeşilırmak'ın karşı kıyısına
						bağlamak üzere inşa edilmiştir. Düzgün kesme taşlarla dört yüksek kemer oluşturacak şekilde inşa
						edilen köprünün bu yüksek ayakları zaman içinde Yeşilırmak'ın yükselen yatağına gömülmüş,
						kemerlerin sadece üst kısımları görünür kalmıştır. Kemerlerin üzerindeki köprü tablası da su
						yüzeyine yaklaştığından halk bu zamandan sonra köprüyü “Alçak Köprü” olarak adlandırmıştır.
						Dönemin Amasya Valisi Ziya Paşa tarafından 1865'te köprü kemerleri üzerine ayaklar inşaa
						edilerek günümüze kadar gelmiştir.
					</Text>
					<Headline style={styles.header}>AMASYA SAAT KULESİ</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{ uri: 'https://farm7.staticflickr.com/6131/5957586988_a330f3c070_b.jpg' }}
					/>
					<Text style={mainStyles.paragraph}>
						Nergis Köprüsü üzerinde 1865 yılında Ziya Paşa tarafından yaptırılmıştır. Bu tarih saat
						kulesinin ilk yapılış tarihidir. Kaidesi dörtgen prizma şeklinde ve mermerden yapılmış, gövdesi
						silindirik bir görünümüne sahip ve tuğladan yapılmış olan Amasya saat kulesinin üst bölümü ahşap
						dörtgen prizma şeklindedir. Yapımından 75 yıl sonra önemli bir deprem yaşayan Amasya saat kulesi
						bu depreme rağmen ayakta kalabilmiştir. Ancak 1940 yılında Hükümet Köprüsü'nün yapımına engel
						olduğu gerekçesiyle yıkılmıştır. Saat kulesi 2002 yılında yeniden inşa edilmiştir.
					</Text>
					<Headline style={styles.header}>HALİFET GAZİ TÜRBESİ</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{
							uri:
								'https://www.kulturportali.gov.tr/repoKulturPortali/large/07022013/5988efc2-f9d6-4b1d-8546-2faeab375630.jpg'
						}}
					/>
					<Text style={mainStyles.paragraph}>
						Türbenin genel olarak yapım tarihinin 1225 yılı olduğu söylense de türbenin batı duvarında taş
						kalıntılarının kaldığı medreseyle aynı tarihte ya da daha önce yapılmış olması gerektiği ileri
						sürülmektedir. Kitabesinden medresenin 1210 yılında yapıldığı anlaşılmaktadır. Türbenin de bu
						tarihte veya daha önce yapıldığı ve Danişmend emirlerinden Halifet Gazi tarafından yaptırıldığı
						kabul edilir.Son yıllarda onarılan türbe, kesme taştan kare plan üzerine sekizgen cepheli kule
						şeklinde yapılmıştır.
					</Text>
					<Headline style={styles.header}>BORABAY GÖLÜ</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{
							uri:
								'https://4.bp.blogspot.com/-D_wO93jBQAc/VCcCB9qO1DI/AAAAAAAAD84/mih4aSkti6E/s1600/Borabay%2BG%C3%B6l%C3%BC%2BAmasya.jpg'
						}}
					/>
					<Text style={mainStyles.paragraph}>
						Doğa yürüyüşü, piknik ve kamp için son derece uygudur. Denizden 800 metre yükseklikteki göl
						küçük bir akarsuyun etraftan gelen yıkıntılarla tıkanması sonucu oluşmuş, doğal bir set gölüdür.
						İl merkezine 65 km ve Taşova ilçesine 15 km mesafede olan göl, 80 metre genişlik ve 25 metre
						derinliğe sahiptir. Doğu batı yönünde uzanan bir vadi de yer alır. 900 x 300 metre ölçülerindeki
						gölün etrafında kayın, sarıçam, sedir, kestane ağaçları yer alır. Gölün rengi zümrüt yeşilidir.
					</Text>
					<Headline style={styles.header}>AMASYA ARKEOLOJİ MÜZESİ</Headline>
					<Image
						style={{ width: '100%', height: 200 }}
						source={{
							uri:
								'https://3.bp.blogspot.com/-heUK9yhALfQ/V4kJ9VGDoLI/AAAAAAAAAB0/JP4W5kuU6hMOOKaeAoHjB2eWnt6dIw3VQCLcB/s1600/m3.JPG'
						}}
					/>
					<Text style={mainStyles.paragraph}>
						Geç Neolitik Erken Kalkolitik Çağ'dan itibaren Tunç Çağı, Hitit, Urartu, Frig, İskit, Pers,
						Helenistik, Roma, Bizans, Selçuklu ve Osmanlı Dönemlerine ait 13 ayrı medeniyetin eserlerini bir
						arada görebileceğiniz müze 1925’te kurulmuştur. 1977 yılında bugünkü bina yapılmış ve 1980
						yılında Amasya Arkeoloji Müzesi hizmete açılmıştır. Müze binasının batısında bulunan müze
						bahçesi içerisinde Hitit, Helenistik, Roma, Bizans, İlhanlı, Selçuklu ve Osmanlı Dönemlerine ait
						taş eserler sergilenmektedir. Daha Önce Müzenin bahçesinde bulunan ve Selçuklu Sultanı I.
						Mesud'a ait olan türbe içinde sergilenen İlhanlılar dönemine ait 14. yy.'dan kalma mumyalar Müze
						içerisindeki özel bir bölümde sergilenmektedir. Onüç farklı medeniyete ait arkeolojik ve
						etnografik eserlerin sayısı 24 bini bulmuştur.
					</Text>
				</ScrollView>
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
