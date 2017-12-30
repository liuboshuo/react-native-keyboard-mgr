/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    View,
    TextInput,
    Platform
} from 'react-native';
import KeyBorardManager from 'react-native-keyboard-mgr'

const isIos = Platform.OS == "ios";

export default class Example extends Component {
    render() {
        isIos && KeyBorardManager.setEnabled(true)
        isIos && KeyBorardManager.setEnableAutoToolbar(true)
        isIos && KeyBorardManager.setShouldShowTextInputPlaceholder(false)
        isIos && KeyBorardManager.setShouldResignOnTouchOutside(false)
        isIos && KeyBorardManager.setPlaceholderFont(10)
        return (
            <View style={styles.container}>
                {/*<ScrollView style={{flex:1}}>*/}
                    <View style={styles.textView}>
                        <TextInput style={styles.text} placeholder="占位文字"/>
                    </View>
                {/*</ScrollView>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textView:{
        position:"absolute",
        flexDirection:"row",
        justifyContent: 'center',
        bottom:0,
    },
    text: {
        borderWidth:1,
        borderColor:"purple",
        backgroundColor:"orange",
        height:40,
        width:300,
        borderRadius:6
    },
});

AppRegistry.registerComponent('Example', () => Example);
