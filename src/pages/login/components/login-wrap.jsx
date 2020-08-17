import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabBar, AtInput, AtForm } from 'taro-ui'
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import './login-wrap.scss'


export default class Index extends Component {
	state = {
		src: 'http://new-img1.bazaar.net.cn/bazaar/156/881/lixvO2ezpUxY.jpeg',
		tabStatus: 1,
		value: "",
		count: 60,
		codeFlag: true,
	}
	componentWillMount() { }

	componentDidMount() { }

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	handleClick(value) {
		console.log(value);
		this.setState({
			tabStatus: value
		})
	}

	handleChange(value) {
		this.setState({
			value
		})
		return value
	}

	handleCodeChange(code) {
		this.setState({
			code
		})
		return code
	}

	countDown() {
		const { count } = this.state;
		if (count === 1) {
			this.setState({
				count: 60,
				codeFlag: true,
			});
		} else {
			this.setState({
				count: count - 1,
				codeFlag: false,
			});
			setTimeout(this.countDown.bind(this), 1000);
		}
	}

	handleCodeClick = () => {
		const { codeFlag } = this.state;
		if (!codeFlag) {
			return;
		}
		this.countDown();
	};

	render() {
		return (
			<View className='login-wrap'>
				<View className='tab-wrap'>
					<View className={`tab-item ${this.state.tabStatus == 1 ? 'active' : ''}`} onClick={() => { this.handleClick(1) }}>快速登录</View>
					<View className={`tab-item ${this.state.tabStatus == 2 ? 'active' : ''}`} onClick={() => { this.handleClick(2) }}>手机号登录</View>
				</View>
				<View className={`login-content ${this.state.tabStatus == 1 ? 'active' : ''}`} >
					<View className={`wx-login-btn`}>一键登录</View>
				</View>
				<View className={`login-content ${this.state.tabStatus == 2 ? 'active' : ''}`} >
					<AtInput
						name='value'
						title='账号'
						type='text'
						placeholder='账号'
						value={this.state.value}
						onChange={this.handleChange.bind(this)}
					/>
					<AtInput
						clear
						title='验证码'
						type='text'
						maxLength='4'
						placeholder='验证码'
						value={this.state.value}
						onChange={this.handleCodeChange.bind(this)}
					>
						<View className='get-code-btn' onClick={() => { this.handleCodeClick() }}>
							{
								this.state.codeFlag
									? '获取验证码'
									: `${this.state.count} 秒后重发`
							}
						</View>
					</AtInput>
					<View className='phone-login-btn'>登录</View>
				</View>


			</View>
		)
	}
}
