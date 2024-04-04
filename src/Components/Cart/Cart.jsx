*/import './Cart.css'
import PropTypes from 'prop-types'

function Cart({cart, removeProduct, addProduct,deleteProduct, onClearCart }) {

  return (
    <div className='cart'>
      
      {cart.map((each) => {
        return (
          <div key={each.id} className="cartItem">
            <p>{each.name}</p>
            <p>{each.quantity}</p>
            <p>{each.price} €/u</p>
             <div >
                <button type="button" onClick={() => removeProduct(each)}>-</button> 
                <button type="button" onClick={()=> addProduct(each)}>+</button> 
                <button type="button" onClick={()=> deleteProduct(each)}>Delete</button> 
             </div>
          </div>
        )
        })}
    <div>
        <button type='button' onClick={() => onClearCart()}>Clear Cart</button>
             <p>
          Total price: {cart.reduce((acc, each) => acc+(each.quantity*each.price),0). toFixed(2)} €
        </p>

    </div>
    </div>
   
  )
}

Cart.propTypes ={
    cart: PropTypes.array,   
    removeProduct: PropTypes.func,
    addProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    onClearCart: PropTypes.func,
}


 export default Cart 