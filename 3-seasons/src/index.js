import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    state = {
        lat: null,
        errMsg: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errMsg: err.message})
        )
    }

    renderContent() {
        // Error
        if(this.state.errMsg && !this.state.lat)
            return <div>Error: {this.state.errMsg}</div>

        // Content
        if (!this.state.errMsg && this.state.lat) 
            return <SeasonDisplay lat={this.state.lat} />

        // Loading
        return <Spinner msg="Please accept location request..."/>
    }

    render() {
        // don't care about red border, but allows all render cases
        // to be wrapped rather than duplicating red border div
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))