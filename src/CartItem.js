import React from 'react';

class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img: ''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity =() =>{
        // console.log('thissss',this.state);
        //set state form 1 objrct form (when you dont need prev state)
        // this.setState({
        //     qty:this.state.qty + 1
        // })

        //setstate from 2(function form when u need prev one)
        this.setState((prevState)=>{
            return {
                qty:this.state.qty +1
            }
        });
    }
    decreaseQuantity =()=>{
        const {qty}=this.state;
        if(qty===0)
        return;
        this.setState((prevState)=>{
            return{
                // if(prevState.qty >0)
                    qty:this.state.qty -1
                
            }
        })
    }

    // for this class to be React component
    render(){
        const {price,title,qty}= this.state;
        // now this will return Jsx code
        return(
              <div className="cart-item">
                  <div className="left-block">
                  <img style={styles.image} />
                  </div>
                  <div className="right-block">
                   <div style={{fontSize:25}}> {title}  </div>
        <div style={{color:'#777'}}> Rs {price}</div>
        <div style={{color:'#777'}}> Qty:{qty}</div>
                   <div className="cart-item-actions">
                   <img 
                   alt="increase" 
                   className="action-icons" 
                   src="https://www.flaticon.com/svg/static/icons/svg/1828/1828919.svg"
                   onClick={this.increaseQuantity} 
                   />
                   <img 
                   alt="decrease" 
                   className="action-icons" 
                   src="https://www.flaticon.com/premium-icon/icons/svg/2920/2920674.svg"
                   onClick={this.decreaseQuantity} 
                   />
                   <img 
                   alt="delete" 
                   className="action-icons" 
                   src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg" 
                   />
                   </div>
                  </div>

              </div>
        );

    }
}
const styles={
    image:{
        height:125,
        width:125,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;