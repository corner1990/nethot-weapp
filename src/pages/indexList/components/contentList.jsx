import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './contentList.scss'
import "taro-ui/dist/style/components/flex.scss";
import { showCode, hideCode } from '../../../actions'

const mapState = state => state.codeDialog

class Index extends Component {
    state = {
      list: [
        {
          imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3793539474,3893904211&fm=26&gp=0.jpg',
          title: '时尚奢侈大众女鞋',
          time: '2020-05-05 09：00-12：00'
        },
        {
          imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3793539474,3893904211&fm=26&gp=0.jpg',
          title: '时尚奢侈大众女鞋',
          time: '2020-05-05 09：00-12：00'
        }
      ]
    }
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toDetail = (e) => {
        console.log(e)
        e.stopPropagation();
        Taro.navigateTo({
            url: '/pages/listDetail/index',
            events: {

            },
            success: function (res) {

            }
        })
    }
    getCode = e => {
      e.stopPropagation()
      this.props.showCode()
    }

    render() {
        let { list } = this.state
        return (
            <View className='index'>
                <View className='at-row'>
                    <View className='at-col'>全部</View>
                    <View className='at-col'>人气</View>
                    <View className='at-col'>时间</View>
                    <View className='at-col'>高回报</View>
                </View>
                {
                  list.map((item, key) => {
                    return (
                      <View className='list-item' key={key} onClick={this.toDetail}>
                        <Image
                        
                            className='list-img' 
                            src={item.imgSrc}
                        ></Image>
                        <View className='list-title'>{item.title}</View>
                        <View className='list-time'>时间：{item.title}</View>
                        <View className='share-btn' onClick={this.getCode}>立即推广</View>
                    </View>
                    )
                  })
                }
                
            </View>
        )
    }
}

export default connect(mapState, {
    showCode, hideCode
})(Index)