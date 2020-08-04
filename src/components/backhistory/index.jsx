import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  state = {
    navigationBarHeight: 40
  }
  componentWillMount () { 
    this.initWhiteHeight()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  initWhiteHeight() {
    const { statusBarHeight, platform } = wx.getSystemInfoSync()
    const { top, height } = wx.getMenuButtonBoundingClientRect()

    // 状态栏高度
    wx.setStorageSync('statusBarHeight', statusBarHeight)
    // 胶囊按钮高度 一般是32 如果获取不到就使用32
    wx.setStorageSync('menuButtonHeight', height ? height : 32)
    let navigationBarHeight = 48
    // 判断胶囊按钮信息是否成功获取
    if (top && top !== 0 && height && height !== 0) {
        navigationBarHeight = (top - statusBarHeight) * 2 + height
    } else {
      navigationBarHeight = platform === 'android' ? 48 : 40
    }
    this.setState({
      navigationBarHeight
    })
  }
  clickLeft() {
    Taro.navigateBack()
  }
  clickRight() {}
  render () {
    let {
      navigationBarHeight
    } = this.state
    const { statusBarHeight } = wx.getSystemInfoSync()
    return (
      <View className='custom-backhistory-wrap'>
        <View className='white-swpace' style={{height: statusBarHeight}}></View>
        <View className='backhistory' style={{ height: navigationBarHeight }}>
          { this.props.children }
        </View>
      </View>
    )
  }
}
