import { Component } from 'react'
import Product from './Product'

const styles = {
    products: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

class Products extends Component {
    render() {
        const { products, addToCart } = this.props

        return (
            <div style={styles.products}>
                { products.map(
                    product => <Product product={product} addToCart={addToCart} key={product.name} />
                ) }
            </div>
        )
    }
}

export default Products