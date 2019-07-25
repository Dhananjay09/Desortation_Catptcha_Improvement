import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../Store/Action';
import styles from './CaptchaComponent.module.css';
import { Offline, Online } from "react-detect-offline";

class CaptchaComponent extends Component {

    state = {
        isValid: false,
        loaded: [],
        touched: false
    }

    componentDidMount() {
        this.props.onLoadNewCaptcha();
    }


    componentWillUnmount() {
        this.props.onResetLoadNewCaptcha();
    }

    inputHandler = (value) => {
        this.setState({ touched: true })
        if (value === this.props.captchaData.solution) {
            this.setState({ isValid: true })
        } else {
            this.setState({ isValid: false })
        }
    }


    render() {
        let content;
        if (this.props.loading) {
            content = <span>Loading</span>
        }
        if (!this.props.loading && this.props.captchaData) {
            content = <img src={this.props.captchaData.captchaURL} alt='captchaImage' />
        }
        return (
            <div>
                <Offline>
                    <div className={styles.ErrorBox}>
                        <span className={styles.ErrorText}>Please check your internet connection.</span>
                    </div>
                </Offline>
                <Online>
                    <div className={styles.CaptchaBox}>
                        <div className={styles.CaptchaImage}>
                            {content}
                        </div>
                        <div className={styles.ReloadWrapper}>
                            <button disabled={this.props.loading}>Reload</button>
                        </div>
                        <div className={styles.InputBoxContainer}>
                            <input
                                onChange={(event) => this.inputHandler(event.target.value)}
                                disabled={this.props.loading} />
                        </div>
                        <div className={styles.MessageBox}>
                            {this.state.isValid ? <span className={styles.SuccessMsg}>Valid</span> : null}
                            {!this.state.isValid && this.state.touched ? <span className={styles.ErrorMsg}>Invalid</span> : null}
                        </div>
                    </div>
                </Online>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        captchaData: state.load.captchaData,
        loading: state.load.loading,
        error: state.load.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadNewCaptcha: () => dispatch(action.loadNewCaptcha()),
        onResetLoadNewCaptcha: () => dispatch(action.resetLoadNewCaptcha())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CaptchaComponent);
