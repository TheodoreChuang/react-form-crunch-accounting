import React, { useState } from 'react'

import { ContactForm, formInitialValues } from './components/Form'
import { ConfirmationModal } from './ConfirmationModal'

export type ContactFormValues = {
  title: String
  firstName: String
  lastName: String
  accountName: String
  companyName: String
  phone: String
  fax: String
  jobTitle: String
  email: String
  emailOptOut: Boolean
  streetNumberAndStreet: String
  city: String
  state: String
  postcode: String
  description: String
}

export const CreateContactForm = () => {
  const [containerFormValues, setContainerFormValues] = useState(formInitialValues)
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div className="page-body form-container">
      <ContactForm handleModalOpen={setModalVisible} updateContainerFormState={setContainerFormValues} />
      <ConfirmationModal
        modalVisible={modalVisible}
        handleClose={setModalVisible}
        confirmedFormData={containerFormValues}
      />
    </div>
  )
}
