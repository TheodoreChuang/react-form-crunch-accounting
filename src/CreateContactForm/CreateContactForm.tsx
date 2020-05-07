import React, { useState } from 'react'

import { ContactForm } from './components/Form'
import { ConfirmationModal } from './ConfirmationModal'

export const CreateContactForm = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <h1>CreateContactForm</h1>
      <ContactForm handleModalOpen={setModalVisible} />
      <ConfirmationModal
        modalVisible={modalVisible}
        handleClose={setModalVisible}
        confirmedFormData={{ test: 'test values' }}
      />
    </>
  )
}
