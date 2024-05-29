import React, { useState } from 'react'

import { ModalComponent } from 'modal-react-validation'
import 'modal-react-validation/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)}>open</button>
      <ModalComponent open={open} setOpen={setOpen}>
        employee created !
      </ModalComponent>
    </div>
  )
}

export default App
