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
      ],
      sort:[
        {
          key:1,
          name:'全部'
        },
        {
          key:2,
          name:'人气'
        },
        {
          key:3,
          name:'时间'
        },
        {
          key:4,
          name:'高回报'
        },
      ],
      defaultSort:1
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

    clickSort = key =>{
      this.setState({defaultSort:key})
    }


    render() {
        let { list, sort, defaultSort } = this.state
        return (
            <View className='index'>
                <View className='at-row'>
                  {sort.map((item,key)=>{
                    return(
                      <View className={`at-col ${defaultSort==item.key ? 'active':'' }`} key={key} onClick={()=>{this.clickSort(item.key)}}>{item.name}</View>
                    )
                  })}
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
