import { Component } from 'react'
import '../App.css'

const styles = {
    title: {
        marginBottom: '30px',
        paddingLeft: '50px'
    }
}

class Title extends Component {
    render() {
        return (
            <h1 style={styles.title} id='title'>Tienda</h1>
        )
    }
}

export default Title