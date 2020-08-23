import React, { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from 'react-redux'
import CustomNavBar from '../../components/navbar'
import CodeDialog from '../../components/codeDialog'
import Tabbar from '../../components/tabbar'
import ContentList from './components/contentList'
import './index.scss'

export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        let title = '首页';
        const imgData=['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2362552488,2333267977&fm=26&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4150166587,838677589&fm=26&gp=0.jpg']
        return (
            <View className='index'>
                <CustomNavBar title={title} />  
                <CodeDialog />  
                <Swiper
                    className='test-h'
                    indicatorColor='#fff'
                    indicatorActiveColor='#333'
                    vertical={false}
                    circular
                    indicatorDots
                    autoplay>
                    {
                        imgData.map((item,index)=>
                        (<SwiperItem>
                            <Image src={item} alt='banner' srcset='' className='banner-img' />
                        </SwiperItem>)
                        )
                    }    
                </Swiper>
                <ContentList></ContentList>
                <Tabbar index={0} />
            </View>
        )
    }
}