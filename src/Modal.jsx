import * as React from 'react'
import styles from './styles.module.css'

const Modal = ({ children, open, setOpen }) => {
  return (
    open && (
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          {children}
          <button className={styles.btn} onClick={() => setOpen(false)}>
            X
          </button>
        </div>
      </div>
    )
  )
}

export default Modal
