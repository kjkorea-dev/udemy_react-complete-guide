import PropTypes from 'prop-types'

import classes from './Input.module.css'
import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
}

export default Input
