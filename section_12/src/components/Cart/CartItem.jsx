import PropTypes from 'prop-types'
import classes from './CartItem.module.css'

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span>{price}</span>
          <span>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}

CartItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
}

export default CartItem
