import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import './news-warp.scss'
import NewItem from './new-item'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  createItem() {
    let arr = []
    for (let i =0; i < 10; i++) {
      arr.push(<NewItem key={i} />)
    }
    return arr
  }
  render () {
    return (
      <View className='news-warp'>
        <View className='news-wrap-text'>MAAAZINE</View>
        <View className='news-wrap-text'>SHOP 全部资讯</View>
        <View className='news-list-wrap'>
          <View className='news-list'>
            { this.createItem() }
          </View>
        </View>
      </View>
    )
  }
}
