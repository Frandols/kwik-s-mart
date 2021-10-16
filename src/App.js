import { Component } from 'react'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      {name: 'Tomate', price: 1500, img: 'assets/productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: 'assets/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 1500, img: 'assets/productos/lechuga.jpg'}
    ],
    cart: [],
    cartVisible: false
  }

  addToCart = product => {
    const { cart } = this.state
    if(cart.find(el => el.name === product.name)){
      const newCart = cart.map(
        el => el.name === product.name ? 
        (
          {
            ...el, 
            amount: el.amount + 1
          }
        ) : el
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
    const { cart, cartVisible, products } = this.state

    return (
      <div>
        <Navbar 
        cart={cart} 
        cartVisible={cartVisible} 
        showCart={this.showCart}/>
        <Layout>
          <Title/>
          <Products 
          products={products}
          addToCart={this.addToCart}/>
        </Layout>
      </div>
    )
  }
}

export default App
