import React, { useState } from 'react'
import styles from './styles.module.css'
import Modal from './Modal'

export const ModalComponent = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className={styles.modal}>
      <Modal open={open} setOpen={setOpen}>
        Employee created!
      </Modal>
    </div>
  )
}
