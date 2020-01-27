import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class App extends React.Component {
    state = { language: 'english' }

    onLanguageChange = (lang) => {
        this.setState({ language: lang })
    }

    // example of context
    // use default value (in context files) or provider with static value
    // if you only want read only
    // to change the values then specify a Provider

    // you don't need a provider if the default is set in the context file.
    // You only need to import the context in the file that it will be used.
    // See Button and Field for reading info from the context
    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
            
                <ColorContext.Provider value="primary">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App