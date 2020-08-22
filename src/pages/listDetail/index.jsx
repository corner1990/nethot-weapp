import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import CustomNavBar from '../../components/navbar'
import './index.scss'

export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {

        return (
            <View className='index'>
                <CustomNavBar title='详情' />
                <View className='banner-wrap'>
                    <Image src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2362552488,2333267977&fm=26&gp=0.jpg' className='banner-img'></Image>
                </View>
                <View className='detail-text-wrap'>
                    <View>珂素妍品牌体验官郎朗吉娜上线</View>
                    <View className='detail-content'>小珂开小红书啦！一来就是重磅！！国际钢琴艺术家朗朗和吉娜正式成为珂素妍品牌体验官！珂素妍至臻修护，赋活身心，焕变美白肌肤，与你携手成就更好的自己。</View>
                </View>
                <View className='common-title'><Text className='title-text'>开播时间：</Text><Text className='title-content'>2020-10-10 20:00-22:00</Text></View>
                <View className='product-wrap'>
                    <View className='common-title'>
                        <Text className='title-text'>主推商品：</Text> 
                    </View>
                    <View className='list-item'>
                        <Image className='list-img' src={'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3793539474,3893904211&fm=26&gp=0.jpg'}></Image>
                        <View className='list-title'>时尚奢侈大众女鞋</View>
                        <View className='list-price'>直播价：￥99.99</View>
                        <View className='list-my-price '>立&emsp;赚：￥99.99</View>
                    </View>
                    <View className='list-item'>
                        <Image className='list-img' src={'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3793539474,3893904211&fm=26&gp=0.jpg'}></Image>
                        <View className='list-title'>时尚奢侈大众女鞋</View>
                        <View className='list-price'>直播价：￥99.99</View>
                        <View className='list-my-price'>立&emsp;赚：￥99.99</View>
                    </View>
                    <View className='list-item'>
                        <Image className='list-img' src={'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3793539474,3893904211&fm=26&gp=0.jpg'}></Image>
                        <View className='list-title'>时尚奢侈大众女鞋</View>
                        <View className='list-price'>直播价：￥99.99</View>
                        <View className='list-my-price'>立&emsp;赚：￥99.99</View>
                    </View>
                    <View className='list-item'>
                        <Image className='list-img' src={'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3793539474,3893904211&fm=26&gp=0.jpg'}></Image>
                        <View className='list-title'>时尚奢侈大众女鞋</View>
                        <View className='list-price'>直播价：￥99.99</View>
                        <View className='list-my-price'>立&emsp;赚：￥99.99</View>
                    </View>
                </View>
                <View className='share-btn'>立即推广</View>
            </View>
        )
    }
}