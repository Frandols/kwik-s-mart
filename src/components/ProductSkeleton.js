import { Component } from 'react'

import Skeleton from 'react-loading-skeleton'

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
        alignItems: 'center'
    }
}

class ProductSkeleton extends Component {
    render() {
        return (
            <article 
                style={styles.product}>
                <Skeleton 
                    width='100%' 
                    height={140} 
                    borderRadius='1rem'
                />
                <Skeleton
                    borderRadius='1rem'
                />
                <Skeleton
                    borderRadius='1rem'
                />
                <Button
                    disabled>
                    add to cart
                </Button>
            </article>
        )
    }
}

export default ProductSkeleton