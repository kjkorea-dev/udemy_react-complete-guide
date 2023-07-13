import PropTypes from 'prop-types'
import CartContext from './cart-context'
import { useReducer } from 'react'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const updatedItems = [...state.items, action.payload]
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    case 'REMOVE': {
      break
    }
    default:
      return defaultCartState
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  )

  // eslint-disable-next-line no-unused-vars
  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: 'ADD', payload: item })
  }
  // eslint-disable-next-line no-unused-vars
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: 'REMOVE', payload: id })
  }

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
