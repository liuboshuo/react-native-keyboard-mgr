//
//  KeyboardManager.m
//  react-native-keyboard-mgr
//
//  Created by 刘硕 on 2017/12/13.
//  Copyright © 2017年 刘硕. All rights reserved.
//

#import "KeyboardManager.h"

@implementation KeyboardManager

RCT_EXPORT_MODULE(KeyboardManager);

/**
 * 启用
 */
RCT_EXPORT_METHOD(setEnabled:(BOOL)enabled){
    [IQKeyboardManager sharedManager].enable = enabled;
}

@end
