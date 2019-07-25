import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; //Redirect
import Captcha from './Captcha/Captcha';

class App extends Component {

  render() {

    return (
      <div>
        <Captcha />
      </div >
    );
  }
}

export default withRouter(App);
