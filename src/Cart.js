import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
           products: [
            {
                price:1000,
                title:'Mobile Phone',
                qty:1,
                img: '',
                id:1
            },{
                price:99,
                title:'Watch',
                qty:10,
                img: '',
                id:2
            },{
                price:999,
                title:'Laptop',
                qty:1,
                img: '',
                id:3
            }
           ]
        }
    }
 handleIncreaseQuantity= (product) =>{
     const {products}= this.state;
     const index= products.indexOf(product);

    products[index].qty +=1;
    this.setState({
        products:products
    })
 }
 handleDecreaseQuantity= (product) =>{
    const {products}= this.state;
    const index= products.indexOf(product);
    if(products[index].qty===0)
    {
        return;
    }
   products[index].qty -=1;
   this.setState({
       products:products
   })
}

handleDeleteProduct= (id) =>{
    const { products }=this.state;
    const items =products.filter((item)=> item.id !== id);
    this.setState({
        products:items
    })

}
render(){
    const { products }= this.state;
    return (
        
        <div className="cart">
        {products.map((product)=>{
          return <CartItem 
                  product={product} 
                  key={product.id}
                  onIncrease={this.handleIncreaseQuantity}
                  onDecrease={this.handleDecreaseQuantity}
                  onDelete={this.handleDeleteProduct} 
                  />
        })}

    
        </div>
    )
}

}
export default Cart;