import { useRef, useState } from 'react'

const SimpleInput = () => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

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

  const nameInputClasses = enteredNameIsValid
    ? 'form-control'
    : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameInputHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
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
