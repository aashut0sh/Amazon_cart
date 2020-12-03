import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar'

import firebase from 'firebase/app'
import 'firebase/firestore';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: [],
      loading:true
    }
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot)=>{
        // console.log(snapshot)
        snapshot.docs.map((doc)=>{
          // console.log(doc.data());
        })
        const products =snapshot.docs.map((doc)=>{
          const data= doc.data();
          data['id']=doc.id
          return data;
        })
        this.setState({
          products,
          loading:false
        })
      })
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //   products: products
    // })

    const docRef = firebase.firestore().collection('products').doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log("Updated Suceess")
    })
    .catch((error)=>{
       console.log("ERROR!!",error);
    })

  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 1) {
      return;
    }


    // products[index].qty -= 1;
    // this.setState({
    //   products: products
    // })
    const docRef = firebase.firestore().collection('products').doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log("Updated Suceess-Decrease")
    })
    .catch((error)=>{
       console.log("ERROR!!",error);
    })
  }

  handleDeleteProduct = (id) => {
  //  const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: items
    // })
    const docRef = firebase.firestore().collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log("Updated Suceess-Delete")
    })
    .catch((error)=>{
       console.log("ERROR!!",error);
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

    const {products,loading}=this.state;

    return (
      <div className="App">
        < Navbar count={this.getCartCount()} />

        < Cart 
        products={products}
         onIncrease={this.handleIncreaseQuantity}
         onDecrease={this.handleDecreaseQuantity}
         onDelete={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{fontSize:20 ,padding:20}}>Total: {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
