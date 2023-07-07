import PropTypes from 'prop-types'

import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
}

Input.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
}

export default Input
