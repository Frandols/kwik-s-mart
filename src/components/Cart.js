import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Cart extends Component {
    render() {
        const { cart, cartVisible, showCart } = this.props
        const amount = cart.reduce((a, b) => a + b.amount, 0)

        return (
            <div>
                <span 
                style={styles.bubble}>
                    {
                        amount !== 0 ?
                        <BubbleAlert 
                        value={amount}/>
                        :
                        null
                    }
                </span>
                <button 
                onClick={showCart} 
                style={styles.cart}>
                    Carro
                </button>
                {
                    cartVisible ?
                    <CartDetails 
                    cart={cart} />
                    :
                    null
                }
            </div>
        )
    }
}

export default Cart