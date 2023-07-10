import PropTypes from 'prop-types'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
  const cartItems = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
  ].map((item) => (
    <li key={item.id}>
      {item.name} {item.price}
    </li>
  ))

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>44.44</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

Cart.propTypes = {
  onClose: PropTypes.func,
}

export default Cart
