import { Component } from 'react'

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '1.2rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                kwik-s-mart
            </div>
        )
    }
}

export default Logo