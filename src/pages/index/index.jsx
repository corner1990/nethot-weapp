import React, { Component } from 'react'

import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
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
    let title = '首页'
    return (
      <View className='index'>
        <CustomNavBar title={title} />
        <Text>Hello world! 123</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Tabbar index={0} />
      </View>
    )
  }
}
