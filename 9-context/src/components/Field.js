import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

// Example of using context to pull info from context
// See Button for Consumer usage
class Field extends React.Component {
    static contextType = LanguageContext

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam'
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field