import { Component } from 'react'

const styles = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    product: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        listStyleType: 'none',
        borderBottom: 'solid 1px #aaa'
    }
}

class CartDetails extends Component {
    render() {
        const { cart } = this.props

        return (
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {cart.map(
                        el => 
                        <li style={styles.product} key={el.name}>
                            <img alt={el.name} src={el.img} width='50' height='32' />
                            {el.name}
                            <span>{el.amount}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CartDetails