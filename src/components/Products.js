import { Component } from 'react'

import ProductSkeleton from './ProductSkeleton'
import Product from './Product'

const styles = {
    products: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gap: '1rem',
        placeContent: 'center'
    }
}

class Products extends Component {
    render() {
        const { 
            products, 
            addToCart,
            loading
        } = this.props

        return (
            <div style={styles.products}>
                {
                    loading
                    ? Array(20).fill()
                        .map(
                            (
                                _,
                                index
                            ) => <ProductSkeleton
                                key={index}
                            />
                        )
                    : products.map(
                        product => <Product 
                            key={product.id} 
                            product={product}
                            addToCart={addToCart} 
                        />
                    ) 
                }
            </div>
        )
    }
}

export default Products