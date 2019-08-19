import React from 'react'

function About() {
    return (
        <div style={infoStyle}>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0.</p>
            <p>I built this watching a tutorial!</p>
        </div>
    )
}

const infoStyle = {
    textAlign: 'center',
    marginTop: '50px'
}

export default About;
