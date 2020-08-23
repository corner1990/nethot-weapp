import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { AtToast } from "taro-ui"
import { View, Text, Image } from '@tarojs/components'
import { showCode, hideCode } from '../../actions'
import './index.scss'

const mapState = state => state.codeDialog

class Index extends Component {
    state = {
        isOpened:false
    }
    componentWillMount() {
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    
    copyLink = ()=>{
        this.props.hideCode();
        this.setState({
            isOpened:true
        })
    }

    render() {
        console.log(this.props)
        return (
            <View className={`code-wrap ${this.props.codeStatus ? 'active' : ''}`}>
                <View className='mask'></View>
                <View className='code-content'>
                    <View>
                        <Image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598118104843&di=133a31a94df1d1a0072e961519c6b2c9&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F37%2F28%2F39573c44ad6d806.jpg' className='code-img'></Image>

                    </View>
                    <View className='copy-url-btn' onClick={()=>this.copyLink()}>复制链接</View>
                    <View className='down-code-url' onClick={()=>this.copyLink()}>下载二维码</View> 
                </View>
                <AtToast isOpened={this.state.isOpened} text="复制成功" icon="check"></AtToast>
            </View>

        )
    }
}

export default connect(mapState, {
    showCode, hideCode
})(Index)