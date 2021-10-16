import { Component } from 'react'
import Button from './Button'

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '368px',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        const { product, addToCart } = this.props

        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={product.name} src={product.img} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <Button onClick={() => addToCart(product)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto