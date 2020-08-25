import React, { Component } from 'react';
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.scss'
import { add,  minus, asyncAdd, asyncMinus } from '../../actions'

import LoginWrap from './components/login-wrap'
const mapState = state => state.counter

class Index extends Component {
  
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }

    render () {
      let title = '登录'
      console.log('login', this.props)
      return (
        <View className='index'>
            {/* <View>
            <View>{this.props.num}</View>
            <View onClick={() => this.props.add()}>add</View>
            <View onClick={() => this.props.minus()}>Minus</View>
            <View onClick={() => this.props.asyncAdd()}>asyncAdd</View>
            <View onClick={() => this.props.asyncMinus()}>asyncMinus</View>
            </View> */}
            <LoginWrap />
        </View>
      )
    }
  }

  export default connect(mapState, {
    minus,
    add,
    asyncMinus,
    asyncAdd
  })(Index)