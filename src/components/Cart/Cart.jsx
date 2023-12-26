import PropTypes from 'prop-types'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext, useState } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch(
      'https://react-complete-guide-d8620-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    )
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
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

  const cartModalContent = (
    <>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

Cart.propTypes = {
  onClose: PropTypes.func,
}

export default Cart
