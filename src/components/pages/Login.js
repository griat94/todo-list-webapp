import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <form style={formStyle}>
                <label style={labelStyle}>Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username..."
                    style={inputStyle}
                />
                <label style={labelStyle}>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password..."
                    style={inputStyle}
                />
                <input type="Submit" className="btn" value="Login" />
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
    borderColor: 'light',
}

const labelStyle = {
    fontSize: '20px',
    fontWeight: 'bold',

}

const formStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: '30px 0 0 30px'
}



export default Login
