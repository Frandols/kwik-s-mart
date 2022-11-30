import { Component } from 'react'
import Logo from './Logo'
import Cart from './Cart'

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '82px',
        position: 'relative',
        padding: '0 1rem'
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