import React from 'react';
import {Appbar, Headline} from 'react-native-paper';
import {withNavigation, DrawerActions} from 'react-navigation';
import {View, Text, StyleSheet, ScrollView,Dimensions} from 'react-native';
import HTML from 'react-native-render-html';
import mainStyles from '../../styles/styles';


const htmlContent = `
<ul class="rtUL rtLines">
			<li class="rtLI rtFirst rtLast"><div class="rtTop">
				<span class="rtSp"></span><span class="rtMinus"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node1.png" alt="" class="rtImg"><a class="rtIn" href="javascript:;">Departmanlar</a>
			</div><ul class="rtUL">
				<li class="rtLI rtLast"><div class="rtBot">
					<span class="rtSp"></span><span class="rtMinus"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="/kategori/19/1/ozgecmis.aspx">Belediye Başkanı Mehmet Sarı</a>
				</div><ul class="rtUL">
					<li class="rtLI"><div class="rtTop">
						<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="/icerik/1741/5594/meclis-uyeleri.aspx">Belediye Meclisi</a>
					</div></li><li class="rtLI"><div class="rtMid">
						<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="http://amasya.bel.tr/icerik/237/14/encumen.aspx" target="_blank">Belediye Encümeni</a>
					</div></li><li class="rtLI"><div class="rtMid">
						<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../#">Yazı İşleri Müdürlüğü</a>
					</div></li><li class="rtLI"><div class="rtMid">
						<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../#">Mali Hizmetler Müdürülüğü</a>
					</div></li><li class="rtLI"><div class="rtMid">
						<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../#">Strateji Geliştirme Müdürlüğü</a>
					</div></li><li class="rtLI"><div class="rtMid">
						<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../#">Basın Yayın ve Halkla İlişkiler Müdürlüğü</a>
					</div></li><li class="rtLI"><div class="rtMid">
						<span class="rtSp"></span><span class="rtMinus"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=41">Fen İşleri Müdürülüğü</a>
					</div><ul class="rtUL">
						<li class="rtLI"><div class="rtTop">
							<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><span class="rtIn">Tamirhane Şefliği</span>
						</div></li><li class="rtLI"><div class="rtMid">
							<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><span class="rtIn">Park ve Bahçe Şefliği</span>
						</div></li><li class="rtLI rtLast"><div class="rtBot">
							<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><span class="rtIn">Su Kanalizasyon Şefliği</span>
						</div></li>
					</ul></li><li class="rtLI"><div class="rtMid">
						<span class="rtSp"></span><span class="rtMinus"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=45">Teftiş Kurulu Müdürlüğü</a>
					</div><ul class="rtUL">
						<li class="rtLI"><div class="rtTop rtHover">
							<span class="rtSp"></span><img src="http://www.amasya.bel.tr/Shared/Images/Node2.png" alt="" class="rtImg"><span class="rtIn">İç Denetçiler Şefliği</span>
						</div></li><li class="rtLI rtLast"><div class="rtBot">
							<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=47">Hukuk İşleri Müdürlüğü</a>
						</div></li>
					</ul></li><li class="rtLI rtLast"><div class="rtBot">
						<span class="rtSp"></span><span class="rtMinus"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../PersonDetail.aspx?CategoryID=235&amp;DepartmentID=48">Belediye Başkan Yardımcıları</a>
					</div><ul class="rtUL">
						<li class="rtLI"><div class="rtTop">
							<span class="rtSp"></span><span class="rtMinus"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../PersonDetail.aspx?CategoryID=235&amp;DepartmentID=49">Belediye Başkan Yardımcısı Hasan ŞAHİN</a>
						</div><ul class="rtUL">
							<li class="rtLI"><div class="rtTop">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=50">İnsan Kaynakları ve Eğitim Müdürülüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=51">Strateji Geliştirme Müdürlüğü</a>
							</div></li><li class="rtLI rtLast"><div class="rtBot">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=52">Kültür ve Sosyal İşler Müdürülüğü</a>
							</div></li>
						</ul></li><li class="rtLI"><div class="rtMid">
							<span class="rtSp"></span><span class="rtMinus"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../PersonDetail.aspx?CategoryID=235&amp;DepartmentID=53">Başkan Yardımcısı Ahmet ÇOBAN</a>
						</div><ul class="rtUL">
							<li class="rtLI"><div class="rtTop">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=54">Zabıta Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=55">İtfaiye Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=56">Veteriner İşleri Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=57">Hal Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=58">Bilgi İşlem Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=59">Muhtarlik Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=60">Destek Hizmetleri Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=61">Sosyal Yardım Hizmetleri Müdürlüğü</a>
							</div></li><li class="rtLI rtLast"><div class="rtBot">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><span class="rtIn">Evlendirme Mumurluğu</span>
							</div></li>
						</ul></li><li class="rtLI rtLast"><div class="rtBot">
							<span class="rtSp"></span><span class="rtMinus"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../PersonDetail.aspx?CategoryID=235&amp;DepartmentID=64">Belediye Başkan Yardımcısı İsmail KAZAN</a>
						</div><ul class="rtUL">
							<li class="rtLI"><div class="rtTop">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=65">İmar ve Şehircilik Müdürlüğü</a>
							</div></li><li class="rtLI"><div class="rtMid">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=66">Ruhsat ve Demetim Müdürlüğü</a>
							</div></li><li class="rtLI rtLast"><div class="rtBot">
								<span class="rtSp"></span><img src="../../../Shared/Images/Node2.png" alt="" class="rtImg"><a class="rtIn" href="../../../Department.aspx?CategoryID=239&amp;DepartmentID=67">Temizlik İşleri Müdürlüğü</a>
							</div></li>
						</ul></li>
					</ul></li>
				</ul></li>
			</ul></li>
		</ul>
`;
class OrganizasyonSemasi extends React.Component {
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
            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
          <Appbar.Content title="Amasya Belediyesi" subtitle="Coğrafi Yapı"/>
          <Appbar.Action icon="search" onPress={this._onSearch}/>
          <Appbar.Action icon="more-vert" onPress={this._onMore}/>
        </Appbar.Header>

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

export default withNavigation(OrganizasyonSemasi);
