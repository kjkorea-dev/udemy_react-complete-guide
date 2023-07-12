import PropTypes from 'prop-types'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfItems = cartCtx.items.reduce(
    (acc, item) => acc + item.amount,
    0
  )
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

HeaderCartButton.propTypes = {
  onShowCart: PropTypes.func,
}

export default HeaderCartButton
