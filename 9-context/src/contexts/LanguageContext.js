import React from 'react'

// Use a provider if you want to change the value
// create context with default value
const Context = React.createContext('dutch')

export class LanguageStore extends React.Component {
    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context