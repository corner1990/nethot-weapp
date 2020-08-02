import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './main-product.scss'

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
      <View className='mian-product'>
        {/* <Text>main product</Text> */}
        <View className='product-img-warp'>
          <Image src={ src } alt="img" srcset="" className='product-img' />
        </View>
        <View className='product-info-wrap'>
          <View className='product-info'>
            <View className='product-title'>
              <View>
                <Text>Thirty is just that.</Text>
              </View>
              <Text>三十而已</Text>
            </View>
            <View className='product-time'>
              <View>
                <Text>2020年</Text>
              </View>
              <Text>8月号</Text>
            </View>
          </View>
          <View className='buy-now'>
            <Text>试读</Text>
            <Text>|</Text>
            <Text>购买￥12.00</Text>
          </View>
        </View>
      </View>
    )
  }
}
