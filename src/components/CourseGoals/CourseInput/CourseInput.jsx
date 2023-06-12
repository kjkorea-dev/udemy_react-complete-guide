import PropTypes from 'prop-types'
import { useState } from 'react'

import Button from '../../UI/Button/Button'
import './CourseInput.css'

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = (event) => {
    if (event.target.value !== '') {
      setIsValid(true)
    }
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : '#ccc' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            background: !isValid ? 'salmon' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  )
}

CourseInput.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
}

export default CourseInput
