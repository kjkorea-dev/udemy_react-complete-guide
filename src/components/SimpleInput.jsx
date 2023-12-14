import { useRef, useState } from 'react'

const SimpleInput = () => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)

    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true)
    }
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    console.log(enteredName)

    const enteredVvalue = nameInputRef.current.value
    console.log(enteredVvalue)

    // nameInputRef.current.value = ''  Not ideal, don't manipulate DOM
    setEnteredName('')
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
