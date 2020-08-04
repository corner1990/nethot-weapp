import React, { Component } from 'react'
// import "taro-ui/dist/style/components/icon.scss";
import { View, Image } from '@tarojs/components'
import './img-view.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    // let src = 'http://mcdn.jfshare.com/image/default/B231953790204DB4AA731D8B3BF50262-6-2.jpeg'
    let { img } = this.props
    return (
      <View className='img-view'>
        <Image
          src={img}
          className='img-material'
          mode='aspectFit'
        />
      </View>
    )
  }
}
