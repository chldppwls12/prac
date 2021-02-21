import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'

import Api_test from './Api_test'
import css from '../css/new.css'
import HeaderAdmin from './Header/Header admin'
import Footer from './Footer/Footer'
import LoginForm from './LoginForm'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  render() {
    return (
      ///Api_test 경로로 유입된 호출은 Api_test.js 파일로 이동
      <div className="App">
        <HeaderAdmin />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/Api_test" component={Api_test} />
        </Switch>
        <Footer
          footer_address={this.props.footer_address}
          footer_tel={this.props.footer_tel}
          footer_email={this.props.footer_email}
          footer_mobile={this.props.footer_mobile}
        />
      </div>
    )
  }
}

App.defaultProps = {
  footer_address: 'footer_address',
  footer_tel: 'footer_tel',
  footer_email: 'footer_email',
  footer_mobile: 'footer_mobile',
}

export default App
