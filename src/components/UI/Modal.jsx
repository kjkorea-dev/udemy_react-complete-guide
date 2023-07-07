import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import classes from './Modal.module.css'

const Backdrop = () => {
  return <div className={classes.backdrop} />
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
      {createPortal(<Backdrop />, portalElement)}
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
}

export default Modal
