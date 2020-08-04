import React, { Component } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import Taro from '@tarojs/taro'
import CustomBackHistory from '../../components/backhistory'
import './index.scss'
import ImgView from './components/img-view'


export default class Index extends Component {
  state = {
    list: [
      'http://mcdn.jfshare.com/image/default/B231953790204DB4AA731D8B3BF50262-6-2.jpeg',
      'http://new-img1.bazaar.net.cn/bazaar/156/881/lixvO2ezpUxY.jpeg',
      'https://mcdn.jfshare.com/image/default/C000457A5FDC4BFC89C7F372BCD31098-6-2.jpg'
    ]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  createItem() {

    let { list } = this.state
    return list.map((img, key) => (
      <SwiperItem key={key}>
            <ImgView img={img} />
      </SwiperItem>
    ))
  }
  handleClick() {
    Taro.navigateBack()
  }
  render () {
    return (
      <View className='list-page'>
        <CustomBackHistory style={{ position: 'fixed' }}>
          <AtNavBar
            className='list-navbar'
            onClickLeftIcon={this.handleClick}
            color='#fff'
            leftIconType='chevron-left'
          />
        </CustomBackHistory>
        <Swiper
          circular
          className='list-swiper'
        >
          { this.createItem() }
        </Swiper>
      </View>
    )
  }
}
