//
//  KeyboardManager.m
//  react-native-keyboard-mgr
//
//  Created by 刘硕 on 2017/12/13.
//  Copyright © 2017年 刘硕. All rights reserved.
//

#import "KeyboardManager.h"

@implementation KeyboardManager


/**
 * 不开启toolBar
 */
- (instancetype)init
{
    self = [super init];
    if (self) {
        [IQKeyboardManager sharedManager].enableAutoToolbar = NO;
        [IQKeyboardManager sharedManager].keyboardDistanceFromTextField = 10;
        [IQKeyboardManager sharedManager].shouldResignOnTouchOutside = YES;
        [IQKeyboardManager sharedManager].shouldShowTextFieldPlaceholder = YES;
    }
    return self;
}

RCT_EXPORT_MODULE(KeyboardManager);

/**
 * 启用
 */
RCT_EXPORT_METHOD(setEnabled:(BOOL)enabled){
    [IQKeyboardManager sharedManager].enable = enabled;
}

/**
 * 是否开工具条
 */
RCT_EXPORT_METHOD(setEnableAutoToolbar:(BOOL)enabled){
     [IQKeyboardManager sharedManager].enableAutoToolbar = enabled;
}

/**
 * 是否显示TextInput的占位文字
 */
RCT_EXPORT_METHOD(setShouldShowTextInputPlaceholder:(BOOL)enabled){
    [IQKeyboardManager sharedManager].shouldShowTextFieldPlaceholder = enabled;
}

/**
 * TextInput距离键盘的距离
 */
RCT_EXPORT_METHOD(setKeyboardDistanceFromTextInput:(float)enabled){
    [IQKeyboardManager sharedManager].keyboardDistanceFromTextField = 10;
}

/**
 * 点击背景是否收起
 */
RCT_EXPORT_METHOD(setShouldResignOnTouchOutside:(BOOL)enabled){
    [IQKeyboardManager sharedManager].shouldResignOnTouchOutside = enabled;
}

/**
 * 是否显示TextInput的占位文字
 */
RCT_EXPORT_METHOD(setPlaceholderFont:(int)fontSize){
    [IQKeyboardManager sharedManager].placeholderFont = [UIFont boldSystemFontOfSize:fontSize];
}



@end
