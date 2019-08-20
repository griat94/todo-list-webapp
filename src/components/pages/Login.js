import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.tryLogin(this.state);
        this.setState(this.state);
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <label style={labelStyle}>Username</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Username..."
                    onChange={this.onChange}
                    style={inputStyle}
                />
                <label style={labelStyle}>Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Password..."
                    onChange={this.onChange}
                    style={inputStyle}
                />
                <input
                    type="submit"
                    className="btn"
                    value="Login"
                    onClick={this.onSubmit}
                    style={loginBtnStyle}
                />
            </form>
        )
    }
}

const inputStyle = {
    display: 'block',
    height: '35px',
    width: '250px',
    marginBottom: '20px',
    fontSize: '16px',
    borderWidth: '3px',
    borderRadius: '5px',
    borderColor: 'light'
}

const labelStyle = {
    fontSize: '20px',
    fontWeight: 'bold'

}

const formStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: '30px 0 0 30px'
}

const loginBtnStyle = {
    height: '35px',
    width: '85px',
    fontSize: '16px'
}

Login.propTypes = {
    tryLogin: PropTypes.func.isRequired
}

export default Login
