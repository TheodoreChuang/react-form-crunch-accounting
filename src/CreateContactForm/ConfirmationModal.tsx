import React from 'react'

import { Modal } from '../components/Modal'

type ConfirmationModalProps = {
  modalVisible: boolean
  handleClose: (modalVisible: boolean) => void
  confirmedFormData: any //TODO
}

export const ConfirmationModal = ({ modalVisible, handleClose, confirmedFormData }: ConfirmationModalProps) => (
  <Modal modalVisible={modalVisible} handleClose={handleClose}>
    {JSON.stringify(confirmedFormData)}
  </Modal>
)
