import React from "react";
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    ViewPropTypes,
    Text,
    TouchableOpacity,
} from "react-native";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
        padding: 0,
        color: 'black',
    }
});

class Input extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            defaultText: props.defaultText,
        }
    }

    render() {

        let {
            leftView,
            rightView,
            leftStyle,
            rightStyle,
            onPressLeft,
            onPressRight,
            viewStyle,
            inputStyle,
            ...other
        } = this.props;

        //左侧传入的为字符串，封装为Text
        if (leftView && typeof leftView == 'string') {
            leftView = <Text style={leftStyle}>{leftView}</Text>;
        }
        //左侧传入的为图片资源，封装为Image
        else if (leftView && typeof leftView == 'number') {
            leftView = <Image style={leftStyle} source={leftView}/>;
        }

        //右侧传入的为字符串，封装为Text
        if (rightView && typeof rightView == 'string') {
            rightView = <Text style={rightStyle}>{rightView}</Text>;
        }
        //右侧传入的为图片资源，封装为Image
        else if (rightView && typeof rightView == 'number') {
            rightView = <Image style={rightStyle} source={rightView}/>;
        }

        //视图布局
        return (
            <View style={StyleSheet.flatten([styles.row, viewStyle])}>
                <TouchableOpacity disabled={!onPressLeft} onPress={onPressLeft}>{leftView}</TouchableOpacity>
                <TextInput
                    style={StyleSheet.flatten([styles.input, inputStyle])}
                    underlineColorAndroid={'transparent'}
                    autoCorrect={false}
                    returnKeyType={'done'}
                    value={this.state.defaultText}
                    {...other}
                    onChangeText={this.onChangeText}
                />
                <TouchableOpacity disabled={!onPressRight} onPress={onPressRight}>{rightView}</TouchableOpacity>
            </View>
        )
    }

    /** 监听输入内容变化*/
    onChangeText = (text) => {

        if (this.props.regex && text.length > 0) {
            text = text.replace(this.props.regex, '');
        }
        this.setState({defaultText: text});
        if (this.props.onChangeText) this.props.onChangeText(text);
    };
}

Input.propTypes = {

    /** 左侧视图，文字，图片，其他组件*/
    leftView: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    /** 右侧视图，文字，图片，其他组件*/
    rightView: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),

    /** 左侧视图风格*/
    leftStyle: ViewPropTypes.style,
    /** 右侧视图风格*/
    rightStyle: ViewPropTypes.style,
    /** 背景视图风格*/
    viewStyle: ViewPropTypes.style,
    /** 输入框风格*/
    inputStyle: PropTypes.object,

    /** 点击左边的视图*/
    onPressLeft: PropTypes.func,
    /** 点击右边的视图*/
    onPressRight: PropTypes.func,

    /** 正则表达式限制输入*/
    regex: PropTypes.object,
    /** 监听输入变化*/
    onChangeText: PropTypes.func,
    /** 默认值*/
    defaultText: PropTypes.string,

    /** 输入框所有属性*/
    ...TextInput.propTypes,
};

export default Input;
