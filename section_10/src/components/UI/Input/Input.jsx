import PropTypes from 'prop-types'
import classes from './Input.module.css'
import React, { useImperativeHandle, useRef } from 'react'

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus()
      },
    }
  })

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
})

Input.displayName = 'Input'

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default Input
