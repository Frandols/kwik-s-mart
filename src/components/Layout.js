import { Component } from 'react'

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        maxWidth: '1200px',
        padding: '1rem 0'
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout