# react-native-vk-input

A React Native TextInput component .

<p align="center">
<img src="https://github.com/vickness/react-native-vk-input/blob/master/screenshot/image1.png" width="400">
<img src="https://github.com/vickness/react-native-vk-input/blob/master/screenshot/image2.png" width="400">
</p>

## Install

Install the package:

```bash
$ npm i react-native-vk-input --save
or yarn add react-native-vk-input
```

Import the ``Input`` component:

```javascript
import Input from 'react-native-vk-input'
```

## Usage

```javascript
//普通输入框，限制输入纯字母
<Input viewStyle={styles.input} placeholder={"请输入文字内容(纯字母)"} regex={/[^A-z]/}/>

//带图标输入框
<Input viewStyle={styles.input} leftView={usmIcon1} placeholder={"请输入用户名"}/>

//带文字输入框
<Input viewStyle={styles.input} leftView={"账号:"} placeholder={"请输入文字内容"}/>

//验证码输入框，限制输入纯数字
<Input viewStyle={styles.input} rightView={"获取验证码"} placeholder={"请输入验证码(纯数字)"} regex={/[^0-9]/}/>
```

# License

MIT
