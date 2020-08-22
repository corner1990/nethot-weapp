import React, { Component } from 'react'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import { Provider } from 'react-redux'
import './app.scss'
import Store from './store'

const store = Store()

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    
    // return this.props.children
    return (
      <Provider store={store}>
        { this.props.children } /* this.props.children 是将要被渲染的页面 */
      </Provider>
    )
    // return <Provider store={store}>
    //   { this.props.children() }
    // </Provider>
  }
}

export default App
