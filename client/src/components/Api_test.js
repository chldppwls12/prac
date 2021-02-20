import React, { Component } from 'react';
const axios = require('axios');

class App extends Component {
  state = {
    response: '',
  };
  
  //페이지 로드시 실행 GET TEST
  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ response: res.express } )
      })
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    try {
      const response = await fetch('/users');
      const body = await response.json();
      alert(body.message)
      if (response.status !== 200) throw Error(body.message);
      return body;
    } catch (error) {
      alert(error);
    }
  };

  sumbitBtn = async () => {
    axios.post('/users', {})
      .then(res => alert(res.data.message))
      .catch(err => console.log(err))
  }
  
render() {
    return (
        <div>
            <button type = "button" onClick = {this.sumbitBtn}>post Btn</button>
        </div>
    );
  }
}

export default App;