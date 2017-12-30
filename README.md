## react-native-keyboard-mgr

react-native的键盘自适应ios版本

### 前言

我们都知道，在app的开发中输入框被键盘遮挡已经是众所周知的问题了。

在android系统的app中系统已经作恶键盘自适应。就是当输入框将要被键盘遮挡的时候，输入框会自动向上移动，达到不被键盘遮挡的程度；

那么在iOS中，系统没有处理。一般我们会对键盘的做事件的监听，来手动控制输入框的位置。

在后来随着IQKeyBoardManager的应用，在iOS中也实现了输入框随着键盘的高度而移动。

那么问题来了，在react-native中，开发的iOS应用存在这样的问题。而android没有。

### 方案

* 在iOS项目中使用Pod管理项目，引用IQKeyBoardManager

    这种方案虽然可以实现键盘的字使用高度，但是这样太过依赖于native项目。
    
* 用react-native插件话的思想封装了这个IQKeyBoardManager

   这种方案直接安装这个库，执行linK命令就可以了，完全不依赖于iOS工程项目
   
   

### 使用API

``` npm install --save react-native-keyboard-mgr ```


* ```setEnabled```

	如果你想在某些场景禁用键盘自适应，只需要使用```setEnabled(false)```就可以了，

	如果你想启用, 只需要使用```setEnabled(true)```就可以了。


* ```setEnableAutoToolbar```

	还可以自定义是否开启自带的工具条


* ```setShouldShowTextInputPlaceholder,setPlaceholderFont```

	修改placholder的显示和隐藏，和字体大小

*  ```setShouldResignOnTouchOutside ```

	点击背景是否收起键盘

### 结语

从此键盘自适应完美解决

这个项目各位同学使用的过程有什么疑问欢迎邮件liushuo132981@163.com一起交流学习。一起改进此项目。
    
    
    
