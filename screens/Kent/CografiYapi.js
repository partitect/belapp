import React from 'react';
import {Appbar, Headline} from 'react-native-paper';
import {withNavigation, DrawerActions} from 'react-navigation';
import {View, Text, StyleSheet, ScrollView,Dimensions} from 'react-native';
import HTML from 'react-native-render-html';
import mainStyles from '../../styles/styles';
import AppBarComp from '../../components/appBarComp';
const htmlContent = `
<div class="page-content">
<div class="page-content-text">
            <div class="altbaslik2"><span style="font-size: large;"><strong>Genel Bilgiler</strong></span></div>
<p><br><span style="font-size: large;">Yüzölçümü: 5.690 km²&nbsp;</span><br><span style="font-size: large;">Nüfusu: 328.674 (2007)&nbsp;</span><br><span style="font-size: large;">Nüfus Yoğunluğu: 58&nbsp;</span><br><span style="font-size: large;">Şehir Nüfusu: 201.331 (2007)&nbsp;</span><br><span style="font-size: large;">Köy Nüfusu: 127.343 (2007)&nbsp;</span><br><span style="font-size: large;">Yıllık Nüfus Artış Hızı: %1,65</span><br><span style="font-size: large;">Yıllık Şehir Nüfus Artış Hızı: %19,15</span><br><span style="font-size: large;">Yıllık Köy Nüfus Artış Hızı: %-15,52&nbsp;</span><br><span style="font-size: large;">İl Trafik No: 05&nbsp;</span><br><span style="font-size: large;">İl Telefon Kodu: 358&nbsp;</span><br><br></p>
<div class="altbaslik2"><span style="font-size: large;"><strong>Hakkında Bilgi</strong></span></div>
<p><br><span style="font-size: large;">Amasya' nın İlçeleri: Göynücek, Gümüşhacıköy, Hamamözü, Merzifon, Suluova, Taşova' dır.</span><br><br><span style="font-size: large;">Coğrafyası: Amasya, doğuda Tokat, güneyde Yozgat, batıda Çorum, kuzeyde Samsun İlleri ile çevrilidir. Yeşilırmağın Orta Karadeniz Dağları (Canik) arasında oluşturduğu vadi üzerinde kurulmuştur.</span><br><br><span style="font-size: large;">Akdağ, Tavşan Dağı, İnegöl Dağı, Kocacık Tepesi, Kırklar Dağı, Ferhat Dağı önemli dağlarıdır. Sulama amaçlı gölet ve barajlar ile sulanan verimli ovalara sahiptir. Borabay Gölü en önemli gölüdür. Yeşilırmak ve göletlerde yayın, sazan, turna, levrek, pullu gibi balık türleri bulunmaktadır.</span><br><br><span style="font-size: large;">İklimi: İlde Karadeniz iklimi - kara iklimi arasında bir geçiş iklimi hüküm sürer. Yazları kara iklimi kadar kurak, Karadeniz iklimi kadar yağışlı değildir. Kışları ise Karadeniz iklimi kadar ılıman, kara iklimi kadar sert değildir.&nbsp;</span><br><br><span style="font-size: large;">Tarihçesi: İlk yerleşimin MÖ. 5.500 yıllarına kadar uzandığı belirlenen Amasya; Antik Çağdan günümüze kadar geçen zaman içerisinde Hitit, Frig, Kimmer, Lidya, Pers, Roma, Bizans, Danişmend, Selçuklu, İlhanlı ve Osmanlı medeniyetlerine ev sahipliği yapmıştır. 1386 yılında Osmanlı topraklarına katılan Amasya, Osmanlı padişah ve şehzadelerinin gösterdikleri özel ilgi nedenleriyle "şehzadeler şehri" olarak da ün yapmıştır.</span><br><br><span style="font-size: large;">Amasya, Kurtuluş Savaşı sırasında ön plana çıkmıştır. 19 Mayıs 1919' da Samsun' da başlayan Milli Mücadelenin ilk adımı 12 Haziran 1919' da Mustafa Kemal' in Amasya' ya gelmesiyle devam etmiştir. Kurtuluş Mücadelesinin planları hazırlanmış, Erzurum ve Sivas Kongrelerinin toplanmasına burada karar verilmiş, 22 Haziran 1919' da yayınlanan Amasya Tamimi ile "Milletin İstiklalini yine milletin azim ve kararının kurtaracağı" Amasya' da ilan edilmiştir.</span><br><br><span style="font-size: large;">Ne Yenir: Amasya tarihi, köklü bir kültür düzeyi yanında ekolojik yapısı itibariyle zengin bir bitki örtüsüne, dolayısıyla da zengin mutfak kültürüne sahiptir. Yöreye özgün yemekler arasında, çatal çorba, cırıkda-cızlak (akıtma), helle çorbası, ekmekaşı (papara), kesme ibik çorbası, toyga çorbası, cilbir, bakla dolması, hengel (kıymasız mantı), pancar (pastırmalı), kabak kabuklu pilav, sirkeli ciğer, yuka tatlısı (yufka patlıcanlı pilav tatlısı), gömlek kadayıfı, halbur tatlısı, zerdali gallesi, vişneli ekmek (Amasya çöreği), sini su böreği (Amasya usulü) ve Yakasal böreği sayılabilir.</span><br><br><span style="font-size: large;">Ne Alınır: Amasya' dan El askısı yazma, yemeni, ev yapımı kuşburnu ezmesi, pirinç ve elma alınması önerilir.</span></p>                                
</div>
</div>
`;
class CografiYapi extends React.Component {
  constructor(props) {
    super(props);
  }
  _goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');
  render() {
    return (
      <View>
        <AppBarComp subTitle="Coğrafi Yapı"/>
        <ScrollView style={styles.mainContent}>
          <HTML
            html={htmlContent}
            imagesMaxWidth={Dimensions
            .get('window')
            .width}/>
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

export default withNavigation(CografiYapi);
