import React, { Component } from 'react'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import CustomNavBar from '../../components/navbar'
import Tabbar from '../../components/tabbar'
import HomePageComponents from './homePageComponents'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <CustomNavBar title='我的' />
         <View className='header'>
            <View>Hi</View>
            <View>远</View>
         </View>
         <View>
        <View className='me'>
          <View className='bookcase'>
            <AtIcon  value='shopping-bag' size='24' ></AtIcon>
            <View> 我的书架</View>
           </View>
          <View className='line'></View>
          <View className='magazine'>
            <AtIcon  value='folder' size='24' ></AtIcon>
            <View>杂志订阅</View>
          </View>
        </View>
         </View>
         <HomePageComponents icon1='calendar' icon2='alert-circle' title1='购买记录' title2='我的评论' />
         <HomePageComponents icon1='iphone' icon2='message' title1='APP账号同步' title2='意见反馈'/>
        <Tabbar index={2} />
      </View>
    )
  }
}
