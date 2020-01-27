import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }
    // Use consumers if you are pulling from more than one context.
    // Otherwise, simpler to use contextType (see Field)
    // Context's take and invoke a function
    render() {
        return (
            <ColorContext.Consumer>
                {(color) => 
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {({ language }) => this.renderSubmit(language)}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        )
    }
}

export default Button