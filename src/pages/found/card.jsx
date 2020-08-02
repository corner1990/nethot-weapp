import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import "taro-ui/dist/style/components/search-bar.scss";
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/icon.scss";

export default class Index extends Component {
  state = {
    value: ''
  }
  
  onChange (value) {
    this.setState({
      value
    })
  }
  render () {
    const { textTitle, textMark,month,day } = this.props.data;
    return (
      <View className='careHeader'>  
         <View className='careHeaderCon'>
           <View className='careHeaderConL'>
            <View className='research'>
              <View className='researchItem1'>{textTitle}</View>
              <View className='researchItem2'>
                 <AtIcon value='message' size='16' color='#eee'></AtIcon>
                 <AtIcon value='play' size='16' color='#eee' className='play'></AtIcon>
              </View>
            </View>
            <View className='title'>{textMark}</View>
           </View>
           <View className='careHeaderConR'>
            <View>{month}月</View>
            <View>{day}日</View>
           </View>
         </View>
      </View>
    )
  }
}