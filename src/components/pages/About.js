import React, { Fragment } from 'react'

function About() {
    return (
        <Fragment>
            <div style={infoStyle}>
                <h1>About this Webapp!</h1>
            </div>
            <div style={infoStyle}>
                <p>This is the TodoList app v1.0.1.</p>
                <p>I built this to get better at coding!</p>
            </div>
            <div style={infoStyle}>
                <p>This app uses React as its frontend framework</p>
                <p>AND</p>
                <p>It uses Node/Express as an API/Server backend</p>
            </div>
        </Fragment>
    )
}

const infoStyle = {
    textAlign: 'center',
    marginTop: '50px'
}

export default About;
