import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

import Tabbar from '../../components/tabbar'
import SearchBar from './searchBar'
import Card from './card'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import "taro-ui/dist/style/components/nav-bar.scss";
import "taro-ui/dist/style/components/icon.scss";

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    const data = [
      {
       textTitle: "研究院|微生态...",
       textMark: "简单三步,助你解锁护肤新风暴",
       month: "07",
       day: '03'
    }, {
      textTitle: "身体要紧",
      textMark: "简单三步,助你解锁护肤新风暴55",
      month: "08",
      day: '08'
   },
   {
    textTitle: "中国共产党万岁",
    textMark: "大败美国佬",
    month: "01",
    day: '02'
 },
 {
  textTitle: "中国共产党万岁",
  textMark: "大败日本人",
  month: "10",
  day: '08'
},];
    return (
      <View className='index'>
        <SearchBar />
        {
          data.map((item, index)=> 
          ( <Card key={index} data={item} />) 
          )
        }
       
        <Tabbar index={1} />
       
      </View>
    )
  }
}
