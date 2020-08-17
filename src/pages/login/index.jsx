import React, { Component } from 'react';
import { View } from '@tarojs/components'
import './index.scss'

import LoginWrap from './components/login-wrap'

export default class Index extends Component {

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      let title = '登录'
      return (
        <View className='index'>
            <LoginWrap />
        </View>
      )
    }
  }