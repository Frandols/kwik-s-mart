import { Component } from 'react'

import Button from './Button'

const styles = {
    product: {
        boxShadow: '0 30px 40px rgb(0, 0, 0, 0.05)',
        width: '250px',
        padding: '1rem',
        borderRadius: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '140px 39px 39px 50px',
        height: '300px',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    productThumbnail: {
        objectFit: 'contain',
        width: '100%',
        height: '100%',
        borderRadius: '1rem'
    },
    productTitle: {
        fontSize: '1rem',
        fontWeight: '600',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    productPrice: {
        fontSize: '1.2rem',
        fontWeight: '800'
    }
}

class Product extends Component {
    render() {
        const { product, addToCart } = this.props

        return (
            <article 
                style={styles.product}>
                <img 
                    style={styles.productThumbnail} 
                    src={product.image} 
                    alt={product.title} 
                />
                <h1
                    style={styles.productTitle}>
                    {product.title}
                </h1>
                <p
                    style={styles.productPrice}>
                    ${product.price}
                </p>
                <Button 
                    onClick={
                        () => addToCart(product)
                    }>
                    add to cart
                </Button>
            </article>
        )
    }
}

export default Product