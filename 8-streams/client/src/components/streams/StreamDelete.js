import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'

class StreamDelete extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchStream(id)
    }

    renderActions() {
        const id = this.props.match.params.id
        return (
            <>
                <button onClick={() => this.deleteStream(id)} className='ui button negative'>Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </>
        )
    }

    renderContent() {
        if (!this.props.stream) 
            return "Are you sure you want to delete this stream?"
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal 
                title="Stream Delete"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    return { 
        stream: state.streams[id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete)