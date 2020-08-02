import React, { Component } from 'react'

import { View, Text } from '@tarojs/components'
import CustomNavBar from '../../components/navbar'
import Tabbar from '../../components/tabbar'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.scss'

import MainProduct from './components/main-product'
import OrderNews from './components/order-news'
import NewsWarp from './components/news-warp'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let title = '首页'
    return (
      <View className='index'>
        <CustomNavBar title={title} />
        <MainProduct />
        <OrderNews />
        <NewsWarp />
        <Tabbar index={0} />
      </View>
    )
  }
}
