import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.scss'

export default class Index extends Component {
  
  constructor(props) {
    let { index } = props
    super(props)
    this.state = {
      current: index,
      tabList: [
        { title: '首页', iconType: 'home'},
        { title: '发现', iconType: 'eye' },
        { title: '我的', iconType: 'user', text: '100', max: 99 }
      ]
    }
  }
  handleClick =  (value) => {
    
    let paths = [
      '/pages/index/index',
      '/pages/found/index',
      '/pages/my/index'
    ]
    let path = paths[value]
    console.log('value', path)
    this.setState({
      current: value
    })

    Taro.navigateTo({ url: path})
  }
  componentWillMount () { 
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  render () {
    let { tabList } = this.state
    return (
      <View className='custom-navbar-wrap'>
        <AtTabBar
          fixed
          tabList={tabList}
          onClick={this.handleClick}
          current={this.state.current}
        />
      </View>
    )
  }
}
