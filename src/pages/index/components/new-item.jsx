import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './new-item.scss'

export default class Index extends Component {
  state = {
    src: 'http://new-img1.bazaar.net.cn/bazaar/156/881/lixvO2ezpUxY.jpeg'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let { src } = this.state
    return (
      <View className='new-item'>
         <Image src={ src } alt="img" srcset="" className='new-img' />
        <View class="new-item-text">2020年8月</View>
      </View>
    )
  }
}
