import { Component } from 'react'

const styles = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '0px 30px 40px rgb(0, 0, 0, 0.05)',
        borderRadius: '2rem',
        width: '300px',
        right: 0,
        overflow: 'hidden'
    },
    ul: {
        margin: 0,
        padding: 0
    },
    product: {
        display: 'grid',
        gridTemplateColumns: '50px auto 50px',
        justifyItems: 'center',
        gap: '1rem',
        alignItems: 'center',
        padding: '1rem',
        listStyleType: 'none',
        height: '82px'
    },
    productImage: {
        objectFit: 'contain'
    },
    productTitle: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: '1rem',
        fontWeight: '400',
        width: '100%'
    },
    productAmount: {
        fontWeight: '600'
    }
}

class CartDetails extends Component {
    render() {
        const { cart } = this.props

        return (
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {
                        cart.map(
                            product => <li
                                key={product.id} 
                                style={styles.product}>
                                <img
                                    style={styles.productImage}
                                    src={product.image}
                                    alt={product.title} 
                                    width='50' 
                                    height='32' 
                                />
                                <h1
                                    style={styles.productTitle}>
                                    {product.title}
                                </h1>
                                <span
                                    style={styles.productAmount}>
                                    {product.amount}
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default CartDetails