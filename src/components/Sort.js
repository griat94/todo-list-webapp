import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Sort extends Component {

    state = {
        sortOrder: false
    }

    onClick = (e) => {
        e.preventDefault();
        this.props.doSort(this.state.sortOrder);
        this.setState({ sortOrder: !this.state.sortOrder })

    }

    render() {
        return (
            <div style={sortBtnStyle}>
                <input
                    type="submit"
                    value="Sort"
                    className="btn"
                    onClick={this.onClick}
                />
            </div>
        )
    }
}

const sortBtnStyle = {
    fontSize: '10px',
    float: 'right'
}

Sort.propTypes = {
    doSort: PropTypes.func.isRequired
}

export default Sort
