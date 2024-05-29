import React from 'react'
import Modal from './Modal'

export const ModalComponent = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      Employee created!
    </Modal>
  )
}
