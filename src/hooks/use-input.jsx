import { useReducer } from 'react'

const initialInputState = {
  value: '',
  isTouched: false,
}

const initialInputStateReducer = (prevState, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: prevState.isTouched }
  }
  if (action.type === 'BLUR') {
    return { value: prevState.value, isTouched: true }
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false }
  }
  return initialInputState
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    initialInputStateReducer,
    initialInputState
  )

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value })
  }

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    hasError,
    reset,
  }
}

export default useInput
