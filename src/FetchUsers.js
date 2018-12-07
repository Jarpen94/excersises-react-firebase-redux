import React from 'react'

class FetchUsers extends React.Component {
    state = {
        UserData: null
    }

    componentDidMount() {
        console.log('componentDidMount')
        fetch(`https://randomuser.me/api`)
            .then(response => response.json())
            .then(data => this.setState({
                UserData: data.results
            }))
    }


    render() {
        return (
            <div>
                {users}
            </div>
        )
    }
}
export default FetchUsers 