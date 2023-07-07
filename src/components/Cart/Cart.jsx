import classes from './Cart.module.css'

const Cart = () => {
  const cartItems = [{}].map((item) => (
    <li key={item.id}>
      {item.name} {item.price}
    </li>
  ))

  return (
    <div>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>44.44</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}

export default Cart
