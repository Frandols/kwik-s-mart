import { Component } from 'react'
import '../App.css'

const styles = {
    title: {
        padding: '0 50px'
    }
}

class Title extends Component {
    render() {
        return (
            <h1 style={styles.title} id='title'>Shop</h1>
        )
    }
}

export default Title