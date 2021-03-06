import React from 'react';

const CartItem = (props) => {
    const { price, title, qty } = props.product;
    // now this will return Jsx code
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={props.product.img} alt="Product" />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}> {title}  </div>
                <div style={{ color: '#777' }}> Rs {price}</div>
                <div style={{ color: '#777' }}> Qty:{qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/1828/1828919.svg"
                        onClick={() => props.onIncrease(props.product)}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/vstatic/svg/1828/1828899.svg?token=exp=1606994959~hmac=da8904b32b1b26ec3d990f7f44f6af83"
                        onClick={() => props.onDecrease(props.product)}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg"
                        onClick={() => props.onDelete(props.product.id)}
                    />
                </div>
            </div>

        </div>
    );


}
const styles = {
    image: {
        height: 125,
        width: 125,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;