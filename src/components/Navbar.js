import { Component } from 'react'
import Logo from './Logo'
import Cart from './Cart'

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
    }
}

class Navbar extends Component {
    render() {
        const { cart, cartVisible, showCart } = this.props

        return (
            <nav style={styles.navbar}>
                <Logo/>
                <Cart 
                cart={cart}
                cartVisible={cartVisible}
                showCart={showCart}/>
            </nav>
        )
    }
}

export default Navbar