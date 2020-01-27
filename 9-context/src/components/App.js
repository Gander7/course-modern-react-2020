import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {
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
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="primary">
                            <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App