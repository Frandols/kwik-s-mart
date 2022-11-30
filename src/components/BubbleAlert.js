import { Component } from 'react'

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '50%',
        color: '#fff',
        fontSize: '0.9rem',
        width: '1.5rem',
        height: '1.5rem',
        display: 'grid',
        placeContent: 'center'
    }
}

class BubbleAlert extends Component {
    getNumber(n) {
        if(!n) return ''
        return n > 9 ? '9+' : n
    }

    render() {
        const { value } = this.props

        return (
            <div 
                style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </div>
        )
    }
}

export default BubbleAlert