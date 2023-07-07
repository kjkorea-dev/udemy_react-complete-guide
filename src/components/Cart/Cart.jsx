import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = () => {
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
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>44.44</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
