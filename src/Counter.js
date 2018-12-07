import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
    state = {
        number: this.props.startValue
    }


    incHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }

    decHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }




    render() {
        return (
            < div >
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.incHandler}
                >
                    +
        </button>

                <button
                    onClick={this.decHandler}

                >
                    -
        </button>
            </div >
        )
    }
}



Counter.defaultProps = {
    startValue: 3
}

Counter.propTypes = {
    startValue: PropTypes.number.isRequired
}

export default Counter