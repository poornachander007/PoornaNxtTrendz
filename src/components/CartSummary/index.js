// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const myFunc = (preAmount, product) =>
        preAmount + product.quantity * product.price

      const totalCartAmount = cartList.reduce(myFunc, 0)

      return (
        <div className="summary_card_container">
          <div className="summary_card">
            <h1 className="total_amount_para">
              Order Total:{' '}
              <span className="total_amount_span">Rs {totalCartAmount}/-</span>
            </h1>
            <p className="total_cart_items_para">
              {cartList.length} Items in cart
            </p>
            <button className="checkout_btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
