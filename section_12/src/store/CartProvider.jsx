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
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      let updatedItems
      if (existingCartItemIndex >= 0) {
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        }

        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        updatedItems = [...state.items, action.payload]
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    case 'REMOVE': {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )
      const existingCartItem = state.items[existingCartItemIndex]
      const updatedTotalAmount = state.totalAmount - existingCartItem.price

      let updatedItems
      if (existingCartItem.amount == 1) {
        updatedItems = [...state.items]
        updatedItems.splice(existingCartItemIndex, 1)
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        }

        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
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

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: 'ADD', payload: item })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: 'REMOVE', payload: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
