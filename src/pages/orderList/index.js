import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon, AtNavBar, AtTabs, AtTabsPane } from 'taro-ui'
import CustomNavBar from '../../components/navbar'
import Backhistory from '../../components/backhistory'

import "taro-ui/dist/style/components/button.scss"
import "taro-ui/dist/style/components/tabs.scss"
import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleBackClick() {
    Taro.navigateBack()
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render () {
    let src = 'https://ipxcdn.jfshare.com/ipxmall/avatar/1124addfcd0cec4ae8db434154d8162a.jpg';
    const tabList = [{ title: '全部' }, { title: '待结算' }, { title: '已结算' }, { title: '无效' }]

    return (
      <View className='orderList'>
        <Backhistory>
          <AtNavBar
            className='list-navbar'
            onClickLeftIcon={this.handleBackClick}
            // color='#666'
            leftText='返回'
            leftIconType='chevron-left'
          />
        </Backhistory>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View>
              <View className='list-item'>
                <Image className='list-img' src={'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3793539474,3893904211&fm=26&gp=0.jpg'}></Image>
                <View className='list-title'>时尚奢侈大众女鞋</View>
                <View className='list-info'>创建日：2020-08-27 10:10:20</View>
                <View className='list-info'>订单号：48565202008271234</View>
                <View className='list-price-wrap'>
                  <Text>消费金额：99.99</Text>
                  <Text className={`list-my-price`}>预估收益：9.99</Text>
                </View>
              </View>
            </View>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
