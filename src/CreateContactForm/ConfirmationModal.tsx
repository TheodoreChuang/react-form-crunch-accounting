import React from 'react'

import { ContactFormValues } from './CreateContactForm'
import { Modal } from '../components/Modal'

type ConfirmationModalProps = {
  modalVisible: boolean
  handleClose: (modalVisible: boolean) => void
  confirmedFormData: ContactFormValues
}

export const ConfirmationModal = ({ modalVisible, handleClose, confirmedFormData }: ConfirmationModalProps) => (
  <Modal modalVisible={modalVisible} handleClose={handleClose}>
    {JSON.stringify(confirmedFormData, null, 2)}
  </Modal>
)
