import PropTypes from 'prop-types'
import CartContext from './cart-context'

const CartProvider = (props) => {
  // eslint-disable-next-line no-unused-vars
  const addItemToCartHandler = (item) => {}
  // eslint-disable-next-line no-unused-vars
  const removeItemFromCartHandler = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CartProvider
