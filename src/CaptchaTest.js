import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";

class CaptchaTest extends Component {
    state = {
        startTimer : Date.now()
      }
  componentDidMount() {
    loadCaptchaEnginge(8);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
        const current_time = Date.now();
      if ( (current_time - this.state.startTimer)/1000 >10 )  
      alert("Captcha Matched");
      else
      alert("Boat Detected");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-group">
            <div className="col mt-3">
              <LoadCanvasTemplate />
            </div>

            <div className="col mt-3">
              <div>
                <input
                  placeholder="Enter Captcha"
                  id="user_captcha_input"
                  name="user_captcha_input"
                  type="text"
                ></input>
              </div>
            </div>

            <div className="col mt-3">
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => this.doSubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptchaTest;
