import React from 'react'
import axios from 'axios'

class ResourceList extends React.Component {
    state = { resources: [] }

    async componentDidMount() {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
        this.setState({ resources: res.data })
    }

    async componentDidUpdate(prevProps) {
        if(this.props.resource !== prevProps.resource) { // infinite loop w/o this check
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
            this.setState({ resources: res.data })
        }
    }

    render() {
        return (
            <div>
                {this.state.resources.length}
            </div>
        )
    }
}

export default ResourceList