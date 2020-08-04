import React, { Component } from 'react'
// import "taro-ui/dist/style/components/icon.scss";
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import "taro-ui/dist/style/components/button.scss"
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
    let src = 'https://ipxcdn.jfshare.com/ipxmall/avatar/1124addfcd0cec4ae8db434154d8162a.jpg'
    return (
      <View className='my'>
        <CustomNavBar title='我的' />
         <View className='header'>
            <View className='header-text'>
              <Text>Hi</Text>
              <View>
                彭于晏
              </View>
            </View>
            <View>
              {/* <AtAvatar
                circle
                image={src}
                size='large'
                className='avatar'
              ></AtAvatar> */}
              <Image src={src} className='avatar' />
            </View>
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
