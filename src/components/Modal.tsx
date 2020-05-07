import React from 'react'

type ModalProps = {
  modalVisible: boolean
  handleClose: (modalVisible: boolean) => void
  children: React.ReactNode
}

export const Modal = ({ modalVisible, handleClose, children }: ModalProps) => {
  const showHideClassName = modalVisible ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={() => handleClose(false)}>close</button>
      </section>
    </div>
  )
}
