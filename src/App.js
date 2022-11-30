import { Component } from 'react'

import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'
import Products from './components/Products'

class App extends Component {
  state = {
    loading: true,
    products: [],
    cart: [],
    cartVisible: false
  }

  async componentDidMount() {
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json()

    this.setState({ loading: false })
    this.setState({ products })
  }

  addToCart = product => {
    const { cart } = this.state

    const cartProduct = cart.find(
      element => element.title === product.title
    )

    if(cartProduct){
      const newCart = cart.map(
        element => element.title === product.title 
        ? (
            {
              ...element, 
              amount: element.amount + 1
            }
          ) 
        : element
      )

      return this.setState({ cart: newCart })
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length) return

    this.setState({cartVisible: !this.state.cartVisible})
  }

  render() {
    const { cart, cartVisible, products, loading } = this.state

    return (
      <div>
        <Navbar 
          cart={cart} 
          cartVisible={cartVisible} 
          showCart={this.showCart}
        />
        <Layout>
          <Title/>
          <Products 
            loading={loading}
            products={products}
            addToCart={this.addToCart}
          />
        </Layout>
      </div>
    )
  }
}

export default App
