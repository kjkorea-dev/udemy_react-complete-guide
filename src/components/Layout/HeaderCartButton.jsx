import PropTypes from 'prop-types'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  )
}

HeaderCartButton.propTypes = {
  onShowCart: PropTypes.func,
}

export default HeaderCartButton
