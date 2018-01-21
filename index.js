/**
 * Created by liushuo on 17/12/11.
 */

import React, {
    NativeModules,
    Platform
} from 'react-native';

const isIos = Platform.OS == "ios"

const KeyboardManagerNativeModule =  NativeModules.KeyboardManager;

function setEnabled(enabled) {
    if(isIos){
        KeyboardManagerNativeModule.setEnabled(enabled)
    }
}


function setEnableAutoToolbar(enabled){
    if(isIos){
        KeyboardManagerNativeModule.setEnableAutoToolbar(enabled)
    }
}

function setShouldShowTextInputPlaceholder(enabled){
    if(isIos){
        KeyboardManagerNativeModule.setShouldShowTextInputPlaceholder(enabled)
    }
}

function setKeyboardDistanceFromTextInput(distance){
    if(isIos){
        KeyboardManagerNativeModule.setKeyboardDistanceFromTextInput(distance)
    }
}

function setShouldResignOnTouchOutside(enabled){
    if(isIos){
        KeyboardManagerNativeModule.setShouldResignOnTouchOutside(enabled)
    }
}


function setPlaceholderFont(fontSize) {
    if(isIos){
        KeyboardManagerNativeModule.setPlaceholderFont(fontSize)
    }
}

module.exports = {
    setEnabled,
    setEnableAutoToolbar,
    setShouldShowTextInputPlaceholder,
    setKeyboardDistanceFromTextInput,
    setShouldResignOnTouchOutside,
    setPlaceholderFont
}
