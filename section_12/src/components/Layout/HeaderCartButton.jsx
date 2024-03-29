import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberOfItems = items.reduce((acc, item) => acc + item.amount, 0)

  const buttonClass = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={buttonClass} onClick={props.onShowCart}>
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
