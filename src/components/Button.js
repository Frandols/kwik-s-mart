import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#f5d16e',
        color: '#111111',
        border: 'none',
        borderRadius: '1rem',
        cursor: 'pointer',
        width: '100%',
        fontWeight: '800',
        height: '50px',
        outline: 'none',
        display: 'grid',
        placeContent: 'center'
    },
    buttonDisabled: {
        backgroundColor: 'rgb(0, 0, 0, .075)',
        color: 'rgb(0, 0, 0, .25)',
        pointerEvents: 'none'
    }
}

class Button extends Component {
    render() {
        const { disabled } = this.props

        return (
            <button 
                style={{
                    ...styles.button,
                    ...(
                        disabled 
                        ? styles.buttonDisabled 
                        : {}
                    )
                }} 
                {...this.props} 
            />
        )
    }
}

export default Button