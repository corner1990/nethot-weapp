import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtNavBar } from 'taro-ui'
import CustomNavBar from '../../components/navbar'
import Tabbar from '../../components/tabbar'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <CustomNavBar title='发现' />
        <Text>found</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Tabbar index={1} />
      </View>
    )
  }
}
