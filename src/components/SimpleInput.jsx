import { useState } from 'react'

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const enteredEmailIsValid =
    enteredEmail.includes('@') && enteredEmail.includes('.')
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    console.log(enteredName, enteredEmail)

    setEnteredName('')
    setEnteredNameTouched(false)

    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
          autoComplete="Name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          autoComplete="Email"
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
