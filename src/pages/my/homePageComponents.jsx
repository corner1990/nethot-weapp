import React, { Component } from 'react'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
 
  
  render () {
    const { icon1, icon2, title1,  title2 } = this.props;
    return (
      <View className='homePage'>
        <View className='common'>
          <View className='commonLeft'>
            <AtIcon value={icon1}  size='24'  ></AtIcon>
            <View className='commonLeftHade'>{title1}</View>
          </View>
          <View>
            <AtIcon  value='chevron-right' size='24' color='#eee'></AtIcon>
          </View>
        </View>
        <View class='underline'></View>
        <View className='common'>
          <View className='commonLeft'>
            <AtIcon  value={icon2}  size='24'  ></AtIcon>
            <View className='commonLeftHade'>{title2}</View>
          </View>
          <View>
            <AtIcon  value='chevron-right'  size='24' color='#eee' ></AtIcon>
          </View>
        </View>
      </View>
    )
  }
}
