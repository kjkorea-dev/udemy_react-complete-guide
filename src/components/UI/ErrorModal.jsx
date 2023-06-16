import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onConfirm} />
)
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  )
}

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
}

Backdrop.propTypes = {
  onConfirm: PropTypes.func,
}

ModalOverlay.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
}

export default ErrorModal
