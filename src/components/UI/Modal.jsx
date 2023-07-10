import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import classes from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

ModalOverlay.propTypes = {
  children: PropTypes.node,
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}

Backdrop.propTypes = {
  onClose: PropTypes.func,
}

export default Modal
