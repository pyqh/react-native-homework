import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import PagerView from 'react-native-pager-view';
const screen = Dimensions.get('window');
interface img {
  uri: string;
}
const Page = ({text, img}: {text: string; img: img}) => {
  return (
    <View>
      <Image source={img} style={{height: 400, width: screen.width}} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const App = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Page
          text={
            '        河源市是岭南文化发祥地之一，南越王赵佗曾担任龙川县首任县令，是客家人开发岭南最早的地区，是全国最早建立苏维埃政府的地方之一，是广东最早的解放区；同时，河源市也是国家园林城市、国家卫生城市、中国优秀旅游城市、全国双拥模范城市、国家级生态保护与建设示范区。在广东省“一核一带一区”区域发展格局中，河源市属于生态功能区。'
          }
          img={{
            uri: 'https://bkimg.cdn.bcebos.com/pic/eaf81a4c510fd9f9d72a1873987bc32a2834349b0e28?x-bce-process=image/resize,m_lfit,h_336,limit_1',
          }}
        />
      </View>
      <View key="2">
        <Page
          text={
            '        河源市位于广东省东北部，地处东江中上游，东靠梅州市，南接惠州市，西连韶关市，北邻江西省赣州市。其范围是北纬23度10分至24度47分，东经114度14分至115度36分。河源市中心城区与广州、深圳及香港的直线距离均在200千米以内。全市总面积1.5654万平方千米'
          }
          img={{
            uri: 'https://bkimg.cdn.bcebos.com/pic/03087bf40ad162d9f2d31806ac89beec8a1363276728?x-bce-process=image/resize,m_lfit,h_336,limit_1',
          }}
        />
        <Image
          source={{
            uri: 'https://bkimg.cdn.bcebos.com/pic/0bd162d9f2d3572c11dff8c63745742762d0f7036528?x-bce-process=image/resize,m_lfit,h_336,limit_1',
          }}
          style={{height: 400, width: screen.width}}
        />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});
export default App;
