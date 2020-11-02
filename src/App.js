import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: [
        {
          price: 1000,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          id: 1
        }, {
          price: 99,
          title: 'Watch',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1602179561926-92e012f34c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          id: 2
        }, {
          price: 999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })

  }
  getCartCount = ()=>{
    const {products}=this.state;
    let count =0;
    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  }
  getCartTotal = ()=>{
    const {products}=this.state;
    let count =0;
    products.forEach((product)=>{
      count =count + product.qty*product.price;
    })
    return count;
  }
  
  render(){

    const {products}=this.state;

    return (
      <div className="App">
        < Navbar count={this.getCartCount()} />

        < Cart 
        products={products}
         onIncrease={this.handleIncreaseQuantity}
         onDecrease={this.handleDecreaseQuantity}
         onDelete={this.handleDeleteProduct}
        />
        <div style={{fontSize:20 ,padding:20}}>Total: {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
