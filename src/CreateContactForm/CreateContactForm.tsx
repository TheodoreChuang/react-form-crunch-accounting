import React, { useState } from 'react'

import { ContactForm, formInitialValues } from './components/Form'
import { ConfirmationModal } from './ConfirmationModal'

export const CreateContactForm = () => {
  const [containerFormValues, setContainerFormValues] = useState(formInitialValues)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <ContactForm handleModalOpen={setModalVisible} updateContainerFormState={setContainerFormValues} />
      <ConfirmationModal
        modalVisible={modalVisible}
        handleClose={setModalVisible}
        confirmedFormData={containerFormValues}
      />
    </>
  )
}
