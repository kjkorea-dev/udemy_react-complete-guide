import PropTypes from 'prop-types'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext, useState } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  // eslint-disable-next-line no-unused-vars
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  // eslint-disable-next-line no-unused-vars
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = (userData) => {
    fetch(
      'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    )
  }

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ))

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  )
}

Cart.propTypes = {
  onClose: PropTypes.func,
}

export default Cart
