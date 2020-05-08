import React from 'react'
import { Formik, Form, Field, FieldProps } from 'formik'
import * as Yup from 'yup'

type ContactFormProps = {
  handleModalOpen: (modalVisible: boolean) => void
  updateContainerFormState: (formValues: any) => void
}

const titles = ['Mr', 'Mrs', 'Ms', 'Mx', 'Dr']

const australianStates = [
  'New South Wales',
  'Victoria',
  'Queensland',
  'Western Australia',
  'South Australia',
  'Tasmania',
]

const ValidationSchema = Yup.object().shape({
  title: Yup.mixed().oneOf(titles).required(),
  firstName: Yup.string().min(1).max(255).required(),
  lastName: Yup.string().min(1).max(255).required(),
  accountName: Yup.string().min(1).max(255).required(),
  companyName: Yup.string().max(255),
  // TODO2 check valid phone formats + add regex?
  phone: Yup.string()
    .min(10)
    .max(12)
    .matches(/[0-9]+/)
    .required(),
  fax: Yup.string()
    .min(10)
    .max(12)
    .matches(/[0-9]+/),
  jobTitle: Yup.string().min(1).max(255),
  email: Yup.string().email().max(255).required(),
  emailOptOut: Yup.boolean(),
  streetNumberAndStreet: Yup.string().min(1).max(255).required(),
  city: Yup.string().min(1).max(255).required(),
  state: Yup.mixed().oneOf(australianStates).required(),
  postcode: Yup.string().min(4).max(4).required(),
  description: Yup.string().min(1).max(1000).required(),
})

export const formInitialValues = {
  title: 'None',
  firstName: '',
  lastName: '',
  accountName: '',
  companyName: '',
  phone: '',
  fax: '',
  jobTitle: '',
  email: '',
  emailOptOut: false,
  streetNumberAndStreet: '',
  city: '',
  state: '',
  postcode: '',
  description: '',
}

export const ContactForm = ({ updateContainerFormState, handleModalOpen }: ContactFormProps) => (
  <Formik
    initialValues={formInitialValues}
    validationSchema={ValidationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setSubmitting(true)

      setTimeout(() => {
        updateContainerFormState(values)
        setSubmitting(false)
        handleModalOpen(true)
        resetForm()
      }, 700)
    }}
  >
    {({ errors, touched, handleReset, isSubmitting }) => (
      /** These props automatically passed to <Field />: values, handleChange, handleBlur :) */
      // TODO2 - consider pulling out the form below into its own component. Being able to pass in values, etc will make unit testing easier
      <>
        <div className="form-toolbar">
          <h1 className="form-toolbar-title">Create Contact</h1>
          <button onClick={handleReset} disabled={isSubmitting} className="form-toolbar-button-cancel">
            Cancel
          </button>
          <button form="create-contact-form" type="submit" disabled={isSubmitting} className="form-toolbar-button-save">
            Save
          </button>
        </div>
        <Form id="create-contact-form">
          <section>
            <h3 className="form-section-title">Contact Information</h3>
            <div className="input-row">
              <div className="titleFirstNameInput">
                <Field
                  name="title"
                  id="title"
                  as="select"
                  className={touched.title && errors.title ? 'has-error' : undefined}
                  style={{ gridArea: 'title' }}
                >
                  <option disabled>None</option>
                  {titles.map((title) => (
                    <option value={title} key={title}>
                      {title}
                    </option>
                  ))}
                </Field>
                <label htmlFor="firstName" style={{ gridArea: 'label' }}>
                  First Name
                </label>
                <Field
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  className={touched.firstName && errors.firstName ? 'has-error' : undefined}
                  style={{ gridArea: 'firstName' }}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  id="lastName"
                  placeholder="Smith"
                  className={touched.lastName && errors.lastName ? 'has-error' : undefined}
                />
              </div>
            </div>
            <div className="input-row">
              <div>
                <label htmlFor="accountName">Account Name</label>
                <Field
                  name="accountName"
                  id="accountName"
                  placeholder="John's Joinery"
                  className={touched.accountName && errors.accountName ? 'has-error' : undefined}
                />
              </div>
              <div>
                <label htmlFor="companyName">Company Name (optional)</label>
                <Field
                  name="companyName"
                  id="companyName"
                  placeholder="John's Joinery"
                  className={touched.companyName && errors.companyName ? 'has-error' : undefined}
                />
              </div>
            </div>
            <div className="input-row">
              <div>
                {/* TODO2 phone & fax with spaces, see mock up */}
                <label htmlFor="phone">Phone</label>
                <Field
                  type="tel"
                  pattern="[0-9]+"
                  name="phone"
                  id="phone"
                  placeholder="0212345678"
                  className={touched.phone && errors.phone ? 'has-error' : undefined}
                />
              </div>
              <div>
                <label htmlFor="fax">Fax (optional)</label>
                <Field
                  type="tel"
                  pattern="[0-9]+"
                  name="fax"
                  id="fax"
                  placeholder="0287654321"
                  className={touched.fax && errors.fax ? 'has-error' : undefined}
                />
              </div>
            </div>
            <div className="input-row">
              <div>
                <label htmlFor="jobTitle">Title (optional)</label>
                <Field
                  name="jobTitle"
                  id="jobTitle"
                  placeholder="Owner"
                  className={touched.jobTitle && errors.jobTitle ? 'has-error' : undefined}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="samle@email.com"
                  className={touched.email && errors.email ? 'has-error' : undefined}
                />
              </div>
            </div>
            <div className="checkbox-input">
              <label htmlFor="emailOptOut">Email Opt Out</label>
              <Field type="checkbox" id="emailOptOut" name="emailOptOut" />
            </div>
          </section>
          <section>
            <h3 className="form-section-title">Address Information</h3>
            <div className="input-row">
              <div>
                <label htmlFor="streetNumberAndStreet">Street No. & Street</label>
                <Field
                  name="streetNumberAndStreet"
                  id="streetNumberAndStreet"
                  placeholder="1, Elizabeth Street"
                  className={touched.streetNumberAndStreet && errors.streetNumberAndStreet ? 'has-error' : undefined}
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <Field
                  name="city"
                  id="city"
                  placeholder="Sydney"
                  className={touched.city && errors.city ? 'has-error' : undefined}
                />
              </div>
            </div>
            <div className="input-row">
              <Field
                name="state"
                id="state"
                as="select"
                className={`selector-state ${touched.state && errors.state ? 'has-error' : undefined}`}
              >
                {/* TODO1: select error is finicky. fix or TODO2*/}
                {/* TODO2: confirm if dropdown or search bar + icon. auto completed? */}
                {australianStates.map((state) => (
                  <option value={state} key={state}>
                    {state}
                  </option>
                ))}
              </Field>
              <div>
                <label htmlFor="postcode">Postcode</label>
                <Field
                  pattern="[0-9]+"
                  name="postcode"
                  id="postcode"
                  placeholder="2000"
                  className={touched.postcode && errors.postcode ? 'has-error' : undefined}
                />
              </div>
            </div>
          </section>
          <section>
            <h3 className="form-section-title">Description Information</h3>
            <div>
              <label htmlFor="description">Description</label>
              <Field name="description" id="description">
                {({ field }: FieldProps) => (
                  <textarea
                    rows={10}
                    style={{ width: '100%', padding: '5px' }}
                    {...field}
                    className={touched.description && errors.description ? 'has-error' : undefined}
                  />
                )}
              </Field>
            </div>
          </section>
        </Form>
      </>
    )}
  </Formik>
)
