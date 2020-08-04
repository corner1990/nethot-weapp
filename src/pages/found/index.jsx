import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import CustomNavBar from '../../components/navbar'
import SearchBar from './searchBar'
import Card from './card'
import './index.scss'

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
        <CustomNavBar title='发现' />
        <SearchBar className='found-search' />
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
