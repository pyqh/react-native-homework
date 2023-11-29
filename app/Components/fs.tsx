import React, {Component} from 'react';
import {Button, View, ToastAndroid, Image} from 'react-native';
import RNFS from 'react-native-fs';

export default class App extends Component {
  state = {sourceFile: 'file:///'};
  _create = () => {
    RNFS.mkdir(RNFS.DocumentDirectoryPath + '/mydata'); //新建目录
    //新建文件，并写入内容
    RNFS.writeFile(
      RNFS.DocumentDirectoryPath + '/test.txt',
      '一次学习，处处填坑',
      'utf8',
    ).then(() =>
      console.log(RNFS.DocumentDirectoryPath + '/test.txt 创建完成'),
    );
  };
  _read = () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath).then(result => {
      result.forEach(file => {
        //读取常用文件特性
        console.log(file.size, file.path, file.isFile());
        //读取具体文件的内容
        if (file.path.endsWith('.txt')) {
          RNFS.readFile(file.path, 'utf8').then(content =>
            console.log(content),
          );
        }
      });
    });
  };

  render() {
    return (
      <View>
        <Button onPress={this._create} title="创建文件及目录" />
        <Button onPress={this._read} title="读目录及文件的演示" />
      </View>
    );
  }
}
