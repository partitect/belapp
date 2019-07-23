import React from 'react';
import {Appbar, Headline, Subheading} from "react-native-paper";
import {withNavigation, DrawerActions} from "react-navigation";
import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import mainStyles from '../styles/styles';
class BaskanScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Appbar.Header style={{backgroundColor:'#ED1C24'}}>
          <Appbar.Action
            icon="menu"
            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
          <Appbar.Content title="Başkanın Özgeçmişi"/>
        </Appbar.Header>
        <ScrollView style={styles.mainContent}>

          <Image
            style={{
            width: '100%',
            height: 300
          }}
            source={{
            uri: 'http://www.amasya.bel.tr/Files/mehmet-sari/baskan-ozgecmis-resim-01.png'
          }}/>
          <Headline style={mainStyles.header}>Mehmet SARI</Headline>
          <Subheading style={mainStyles.subHeader}>Amasya Belediye Başkanı</Subheading>
          <Text style={mainStyles.paragraph}>
            1961 yılında Amasya ili Taşova ilçesi Uluköy kasabasında dünyaya gelen Mehmet
            SARI , İlkokulu ve ortaokulu doğduğu topraklar olan Uluköy kasabasın da
            tamamladı. Dönemin zor şartları sebebiyle , ekonomik anlamda ailesine küçük
            yaşlar da destek olan SARI ,Babası ile birlikte çıktığı ve çalıştığı yerel
            pazarlar sayesinde ticaretle tanışıp , ticari hayatın zorlulukları ile küçük
            yaşlarda mücadele etmek zorunda kaldı. Bu mücadele süreci ve bu dönemde edinmeye
            başladığı tecrübeler, Mehmet SARI’NIN yazdığı başarı hikayesinin temelini
            oluşturdu. 1973 yılında devlet parasız yatılı imtihanlarını kazanarak Amasya
            İmam Hatip Lisesi’ne ikincilik derecesiyle girmeyi başaran , eğitimi sırasında
            ülkenin içinde bulunduğu şartlar sebebiyle yaşanan sıkıntılara kayıtsız
            kalamayıp , siyasetle tanışan SARI , girdiği bu yeni mücadele alanında hızla
            yükselerek , 1978 -1980 yılları arasında Ülkü Ocakları Başkanlığı yaptı.
            Sonrasında askerlik görevini Erzurum’da tamamladıktan sonra , İstanbul’da İhlas
            Holding bünyesinde çalışma hayatına atılan Mehmet SARI , sırasıyla Türkiye
            Gazetesinde, TGRT Televizyonunun kuruluşu aşamasında idari kadroda, İhlas Gıda
            Sektöründe Yönetici pozisyonunda görevler alıp , 2002 yılında emekli olana kadar
            da İhlas Holding’de üst düzey yöneticilik görevlerinde bulundu. İhlas Holding’de
            yöneticilik yaptığı yıllarda , vazgeçilmezi olan Amasya Milliyetçiliği fikri
            doğrultusunda , yüzlerce hemşerisinin iş bulması konusunda yardımcı olmaya
            çalışan Mehmet SARI , takribi 700 civarında ailenin İstanbul’da istihdam
            edilmelerine vesile oldu. 2002 yılı itibariyle kendi şirketlerini kurarak iş
            hayatına atılmaya karar veren , kurduğu onbir ayrı şirketi , M.S Şirketler Grubu
            çatısı altında toplayan SARI , tüm bu şirketlerin yönetim kurulu başkanlığını
            yürüttü. İstanbul’da faaliyet gösteren ve ağırlıklı olarak turizm, lokanta,
            kafeterya işletmeciliği, otel işletmeciliği ve inşaat alanlarında faaliyet
            gösteren şirketlerde yüzlerce kişiye iş imkanı sağlayan Mehmet SARI , Amasya ya
            hizmet etme noktası yolunda karar verdiği , Amasya Belediye Başkan adaylığı
            sebebiyle aklında başka bir şey olmasını istemediği için , kurup bugüne kadar
            başarıyla yürüttüğü M.S Şirketler Grubunun yönetimini , oğlu Av. Bilal SARI’YA
            teslim etti. Çalışma hayatına erken atılması sebebiyle yarıda bıraktığı
            öğrenimini , Anadolu Üniversitesi İşletme Bölümü Lisans diplomasıyla devam
            ettiren SARI , 2015- 2018 yılları arasında Bahçeşehir Üniversitesi Sosyal
            Bilimler Fakültesi Siyaset Bilimi ve Uluslararası İlişkiler Bölümünde , Küresel
            Siyaset alanında Yüksek Lisans öğrenimi yaptı. Bunlarla da yetinmeyen Mehmet
            SARI , Bahçeşehir Üniversitesinde Siyaset Akademisi ve Yerel Yönetimler
            Akademisi, Beykent Üniversitesinde Siyasal İletişim, Sermaye’nin Yönü,
            Terör-Antiterör ve Uluslararası Boyutları, Finans ve Şirketlerin
            Kurumsallaşması, İdeal Yöneticilik alanlarında eğitim programlarına katılarak
            sertifika ve başarı belgesi almaya hak kazandı. Topluma karşı olan sosyal
            sorumluluk gereği bir çok faaliyete imza atan Mehmet SARI , İstanbul Ticaret
            Odası, Oteller Birliği, Sultanahmet Güzelleştirme ve Kalkındırma Derneği ,
            Amasya Sanayici ve iş adamları derneği üyesi olup, İstanbul Amasyalılar Derneği
            ve Taşovalılar Derneği Kurucu Başkan Yardımcılığı görevlerini üstlendi. 7
            Haziran 2015 tarihinde yapılan Milletvekili Genel Seçiminde MHP Amasya
            Milletvekili adayı olan ve Amasya halkının verdiği destekle de milletvekili
            seçilen SARI , Yüksek Seçim Kurulu'nun yurtdışı oylarını Türkiye genelinde
            illere dağıtması uygulaması sebebiyle Amasyalı hemşerilerinin ona vermiş olduğu
            , milletvekiliği hakkı elinden alındı. 18 Mart 2018 tarihinde seçildiği MHP
            Merkez Yürütme Kurulu üyeliği görevini halen sürdüren Mehmet SARI , evli ve 3
            çocuk babasıdır.
          </Text>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContent: {
    padding: 10,
    marginBottom: 120
  },
});

export default withNavigation(BaskanScreen);