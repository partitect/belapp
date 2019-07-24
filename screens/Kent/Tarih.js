import React from 'react';
import { Appbar, Headline } from 'react-native-paper';
import { withNavigation, DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import mainStyles from '../../styles/styles';
import HTML from 'react-native-render-html';

const htmlContent = `
<div class="page-content">
        <div class="page-content-text">
            
                    <p style="text-align: center;"><strong><span style="font-size: large;">AMASYA' NIN TARİHİ</span></strong></p>
<p><span style="font-size: large;">Yeşilırmak vadisi Harşena Dağı eteklerine kurulan Amasya, 7 bin yılın üzerindeki eski tarihi boyunca bilim adamları, sanatkarlar, şairler yetiştirmiş, Osmanlı şehzadelerinin eğitim gördüğü, Dünyanın en güzel Misket elması, kirazı, şeftalisi ve bamyasının üretildiği, gezip görülecek pek çok tarihi ve doğal güzelliği bulunan ilginç bir şehirdir.</span></p>
<p><span style="font-size: large;">Milli Mücadelenin temellerinin atıldığı Kurtuluş savaşının ilk önemli adımını teşkil eden Amasya Genelge’sinin 22 Haziran 1919’da okunduğu kent, krallık başkentliği yapmış tarihi ve doğal güzellikleriyle önemli şehirlerimizden biridir.</span></p>
<p><strong><span style="font-size: large;"><span><br></span></span></strong></p>
<p><strong><span style="font-size: large;">AMASYA KALESİ</span></strong></p>
<p><span style="font-size: large;">Harşane Dağı adlı dik kayalıklar üzerindedir. Harşena Kalesi adıyla da bilinir. Denizden 700, Yeşilırmak'tan ise 300 metre yüksekte bulunmaktadır. azı tarihçilere göre kaleyi Pontus Kralı Mithridates yaptırmıştır. Bazılarına göre ise Kumandan Karsan veya Harsana yaptırdığı için kale Harşana / Harşena ismini almıştır. Kalenin Belkıs, Saray, Maydonos ve Meydan adlarına dört kapısı, kalede Cilanbolu adı verilen ve kalenin orta yerinde yüksekçe bir yerden kayaya oyulmuş 150 basamakla aşağıya inilen 8 metre çapında bir dehliz, sarnıç, zindan bulunmaktadır. Kaleden 70 metre aşağıda Yeşilırmağa ve kral mezarlarına kadar uzanan M.Ö. III. yüzyıla ait merdivenli yer altı yolu, burç ve cami kalıntıları vardır.</span></p>
<p><strong><span style="font-size: large;">AYNALI MAĞARA</span></strong></p>
<p><span style="font-size: large;">Şehir merkezine 3,3 km uzaklıktadır. Kaya mezarlarının en iyi işlenmiş ve tamamlanmış olanıdır. Yerden dört basamakla çıkılan mezar düz bir kayaya oyulmuştur. Genişliği 9,8 metre yüksekliği 13 metre'dir. Mağaranın dış cephe yüzeyi perdahlanarak parlatılmıştır. Buraya Aynalı Mağara denmesinin nedeni de, güneş vurduğu zaman mağaranın cephesinin parlamasıdır. M.Ö. 2. yy da Helenistik çağda Amasya’da yaşamış Mitra Rahibi TES’in anıtsal mezarıdır. Mağaranın içinin çok geniş olması ve duvarlarda yer alan renkli resimler ve alınlığında yazan “Büyük Rahip Tes” yazısı bu düşünceyi destekler. Hz. İsa’nın on iki havarisinden birinin, Hristiyanlığı bu mağarada yaydığı da rivayet edilir.</span></p>
<p><strong><span style="font-size: large;">ALÇAK KÖPRÜ</span></strong></p>
<p><span style="font-size: large;">Roma döneminde, zamanın kent merkezi durumundaki kale ve çevresini Yeşilırmak'ın karşı kıyısına bağlamak üzere inşa edilmiştir. Düzgün kesme taşlarla dört yüksek kemer oluşturacak şekilde inşa edilen köprünün bu yüksek ayakları zaman içinde Yeşilırmak'ın yükselen yatağına gömülmüş, kemerlerin sadece üst kısımları görünür kalmıştır. Kemerlerin üzerindeki köprü tablası da su yüzeyine yaklaştığından halk bu zamandan sonra köprüyü “Alçak Köprü” olarak adlandırmıştır. Dönemin Amasya Valisi Ziya Paşa tarafından 1865'te köprü kemerleri üzerine ayaklar inşaa edilerek günümüze kadar gelmiştir.</span></p>
<p>&nbsp;</p>
<p><strong><span style="font-size: large;">AMASYA SAAT KULESİ</span></strong></p>

<p><span style="font-size: large;">Nergis Köprüsü üzerinde 1865 yılında Ziya Paşa tarafından yaptırılmıştır. Bu tarih saat kulesinin ilk yapılış tarihidir. Kaidesi dörtgen prizma şeklinde ve mermerden yapılmış, gövdesi silindirik bir görünümüne sahip ve tuğladan yapılmış olan Amasya saat kulesinin üst bölümü ahşap dörtgen prizma şeklindedir. Yapımından 75 yıl sonra önemli bir deprem yaşayan Amasya saat kulesi bu depreme rağmen ayakta kalabilmiştir. Ancak 1940 yılında Hükümet Köprüsü'nün yapımına engel olduğu gerekçesiyle yıkılmıştır. Saat kulesi 2002 yılında yeniden inşa edilmiştir.</span></p>
<p><strong><span style="font-size: large;">HALİFET GAZİ TÜRBESİ</span></strong></p>
<p><span style="font-size: large;">Türbenin genel olarak yapım tarihinin 1225 yılı olduğu söylense de türbenin batı duvarında taş kalıntılarının kaldığı medreseyle aynı tarihte ya da daha önce yapılmış olması gerektiği ileri sürülmektedir. Kitabesinden medresenin 1210 yılında yapıldığı anlaşılmaktadır. Türbenin de bu tarihte veya daha önce yapıldığı ve Danişmend emirlerinden Halifet Gazi tarafından yaptırıldığı kabul edilir.Son yıllarda onarılan türbe, kesme taştan kare plan üzerine sekizgen cepheli kule şeklinde yapılmıştır.</span></p>
<p><strong><span style="font-size: large;">BORABAY GÖLÜ</span></strong></p>
<p><span style="font-size: large;">Doğa yürüyüşü, piknik ve kamp için son derece uygudur. Denizden 800 metre yükseklikteki göl küçük bir akarsuyun etraftan gelen yıkıntılarla tıkanması sonucu oluşmuş, doğal bir set gölüdür. İl merkezine 65 km ve Taşova ilçesine 15 km mesafede olan göl, 80 metre genişlik ve 25 metre derinliğe sahiptir. Doğu batı yönünde uzanan bir vadi de yer alır. 900 x 300 metre ölçülerindeki gölün etrafında kayın, sarıçam, sedir, kestane ağaçları yer alır. Gölün rengi zümrüt yeşilidir.</span></p>
<p><strong><span style="font-size: large;">AMASYA ARKEOLOJİ MÜZESİ</span></strong></p>
<p><span style="font-size: large;">Geç Neolitik Erken Kalkolitik Çağ'dan itibaren Tunç Çağı, Hitit, Urartu, Frig, İskit, Pers, Helenistik, Roma, Bizans, Selçuklu ve Osmanlı Dönemlerine ait 13 ayrı medeniyetin eserlerini bir arada görebileceğiniz müze 1925’te kurulmuştur. 1977 yılında bugünkü bina yapılmış ve 1980 yılında Amasya Arkeoloji Müzesi hizmete açılmıştır. Müze binasının batısında bulunan müze bahçesi içerisinde Hitit, Helenistik, Roma, Bizans, İlhanlı, Selçuklu ve Osmanlı Dönemlerine ait taş eserler sergilenmektedir. Daha Önce Müzenin bahçesinde bulunan ve Selçuklu Sultanı I. Mesud'a ait olan türbe içinde sergilenen İlhanlılar dönemine ait 14. yy.'dan kalma mumyalar Müze içerisindeki özel bir bölümde sergilenmektedir. Onüç farklı medeniyete ait arkeolojik ve etnografik eserlerin sayısı 24 bini bulmuştur.</span></p>                                

                
        </div>   
    </div>
`;


class Tarih extends React.Component {
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
					<HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
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

export default withNavigation(Tarih);
