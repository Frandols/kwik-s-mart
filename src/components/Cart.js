import { Component } from 'react'

import BubbleAlert from './BubbleAlert'
import Button from './Button'
import CartDetails from './CartDetails'

import { ShoppingCart } from 'react-feather'

const styles = {
    cart: {
        width: '50px',
        height: '50px',
        position: 'relative'
    },
    bubble: {
        position: 'absolute',
        right: -10,
        top: 40
    }
}

class Cart extends Component {
    render() {
        const { 
            cart, 
            cartVisible, 
            showCart 
        } = this.props

        const amount = cart.reduce(
            (
                a, 
                b
            ) => a + b.amount, 
            0
        )

        return (
            <div
                style={styles.cart}>
                <span 
                    style={styles.bubble}>
                    {
                        amount !== 0 
                        ? <BubbleAlert 
                            value={amount}
                        />
                        : null
                    }
                </span>
                <Button
                    onClick={showCart}
                    disabled={amount === 0}>
                    <ShoppingCart/>
                </Button>
                {
                    cartVisible 
                    ? <CartDetails 
                        cart={cart} 
                    />
                    : null
                }
            </div>
        )
    }
}

export default Cart