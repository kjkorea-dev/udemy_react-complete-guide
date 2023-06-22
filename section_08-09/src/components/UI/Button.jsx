import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = (porps) => {
  return (
    <button
      className={classes.button}
      type={porps.type}
      onClick={porps.onClick}
    >
      {porps.children}
    </button>
  )
}

Button.porpTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button
