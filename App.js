/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Input from "./lib/src";

const pwdIcon1 = require("./src/icon-login-1-n.png");
const pwdIcon2 = require("./src/icon-login-1-s.png");
const usmIcon1 = require("./src/icon-login-2-n.png");
const usmIcon2 = require("./src/icon-login-2-s.png");
const eyeIcon1 = require("./src/icon-login-4-s.png");

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={styles.container}>
              <Input
                  viewStyle={styles.input}
                  placeholder={"请输入文字内容(纯字母)"}
                  regex={/[^A-z]/}
                  onChangeText={text => {console.log("test: " + text)}}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.input}
                  leftView={usmIcon1}
                  placeholder={"请输入用户名"}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.input}
                  leftView={pwdIcon1}
                  rightView={eyeIcon1}
                  placeholder={"请输入密码"}
                  onPressRight={() => {}}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.input}
                  leftView={"账号:"}
                  placeholder={"请输入文字内容"}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.input}
                  leftView={"密码:"}
                  rightView={eyeIcon1}
                  placeholder={"请输入文字内容"}
                  onPressRight={() => {}}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.input}
                  leftView={"请选择城市:"}
                  placeholder={"请输入文字内容"}
                  onPressLeft={() => {alert("确定")}}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.input}
                  rightView={"获取验证码"}
                  placeholder={"请输入验证码(纯数字)"}
                  regex={/[^0-9]/}
                  onPressRight={() => {alert("确定")}}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.borderInput}
                  placeholder={"请输入文字内容"}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.borderInput}
                  leftView={usmIcon1}
                  placeholder={"请输入用户名"}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.lineInput}
                  inputStyle={{marginHorizontal: 0}}
                  placeholder={"请输入文字内容"}
              />
              <View style={{height: 10}}/>
              <Input
                  viewStyle={styles.lineInput}
                  leftView={usmIcon1}
                  placeholder={"请输入文字内容"}
              />
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
      padding: 20
  },
  input: {
      height: 40,
      width: 300,
      backgroundColor: '#eee'
  },
    borderInput: {
        height: 45,
        width: 300,
        borderColor: '#ccc',
        borderWidth: 1.5,
        borderRadius: 6,
    },
    lineInput: {
        height: 40,
        width: 300,
        borderBottomWidth: 1.5,
        borderBottomColor: '#ccc',
        padding: 0
    }
});
