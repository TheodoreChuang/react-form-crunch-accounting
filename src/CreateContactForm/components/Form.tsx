import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

type ContactFormProps = {
  handleModalOpen: (modalVisible: boolean) => void
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
  title: Yup.mixed().oneOf(titles), //.required(),
  firstName: Yup.string().min(1).max(255), //.required(),
  lastName: Yup.string().min(1).max(255), //.required(),
  accountName: Yup.string().min(1).max(255), //.required(),
  companyName: Yup.string().max(255),
  // TODO2 check valid phone formats + add regex?
  phone: Yup.string()
    .min(10)
    .max(12)
    .matches(/[0-9]+/), //.required(),
  fax: Yup.string()
    .min(10)
    .max(12)
    .matches(/[0-9]+/),
  jobTitle: Yup.string().min(1).max(255),
  email: Yup.string().email().max(255), //.required(),
  emailOptOut: Yup.boolean(),
  streetNumberAndStreet: Yup.string().min(1).max(255), //.required(),
  city: Yup.string().min(1).max(255), //.required(),
  state: Yup.mixed().oneOf(australianStates), //.required(),
  postcode: Yup.number().min(4).max(4), //.required(),
  description: Yup.string().min(1).max(1000), //.required(),
})

const formInitialValues = {
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

export const ContactForm = ({ handleModalOpen }: ContactFormProps) => (
  <Formik
    initialValues={formInitialValues}
    validationSchema={ValidationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setSubmitting(true)

      setTimeout(() => {
        console.log('Successfully submitted form', JSON.stringify(values, null, 2))
        resetForm()
        setSubmitting(false)
        handleModalOpen(true)
      }, 1000)
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleReset, isSubmitting }) => (
      <Form>
        {/* TODO delete me later */} {JSON.stringify(values, null, 2)}
        <section>
          <h3>Contact Information</h3>
          <div>
            <select
              name="title"
              id="title"
              onChange={handleChange}
              value={values.title}
              onBlur={handleBlur}
              className={touched.title && errors.title ? 'has-error' : undefined}
            >
              <option disabled>None</option>
              {titles.map((title) => (
                <option value={title} key={title}>
                  {title}
                </option>
              ))}
            </select>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
              className={touched.title && errors.title ? 'has-error' : undefined}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Smith"
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
              className={touched.lastName && errors.lastName ? 'has-error' : undefined}
            />
          </div>
          <div>
            <label htmlFor="accountName">Account Name</label>
            <input
              type="text"
              name="accountName"
              id="accountName"
              placeholder="John's Joinery"
              onChange={handleChange}
              value={values.accountName}
              onBlur={handleBlur}
              className={touched.accountName && errors.accountName ? 'has-error' : undefined}
            />
          </div>
          <div>
            <label htmlFor="companyName">Company Name (optional)</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="John's Joinery"
              onChange={handleChange}
              value={values.companyName}
              onBlur={handleBlur}
              className={touched.companyName && errors.companyName ? 'has-error' : undefined}
            />
          </div>
          <div>
            {/* TODO2 phone & fax with spaces, see mock up */}
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              pattern="[0-9]+"
              name="phone"
              id="phone"
              placeholder="0212345678"
              onChange={handleChange}
              value={values.phone}
              onBlur={handleBlur}
              className={touched.phone && errors.phone ? 'has-error' : undefined}
            />
          </div>
          <div>
            <label htmlFor="fax">Fax (optional)</label>
            <input
              type="tel"
              pattern="[0-9]+"
              name="fax"
              id="fax"
              placeholder="0287654321"
              onChange={handleChange}
              value={values.fax}
              onBlur={handleBlur}
              className={touched.fax && errors.fax ? 'has-error' : undefined}
            />
          </div>
          <div>
            <label htmlFor="jobTitle">Title (optional)</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Owner"
              onChange={handleChange}
              value={values.jobTitle}
              onBlur={handleBlur}
              className={touched.jobTitle && errors.jobTitle ? 'has-error' : undefined}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="samle@email.com"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className={touched.email && errors.email ? 'has-error' : undefined}
            />
          </div>
          <label htmlFor="emailOptOut">Email Opt Out</label>
          <input
            type="checkbox"
            id="emailOptOut"
            name="emailOptOut"
            onChange={handleChange}
            checked={values.emailOptOut}
            onBlur={handleBlur}
          />
        </section>
        <section>
          <h3>Address Information</h3>
          <div>
            <label htmlFor="streetNumberAndStreet">Street No. & Street</label>
            <input
              type="text"
              name="streetNumberAndStreet"
              id="streetNumberAndStreet"
              placeholder="1, Elizabeth Street"
              onChange={handleChange}
              value={values.streetNumberAndStreet}
              onBlur={handleBlur}
              className={touched.streetNumberAndStreet && errors.streetNumberAndStreet ? 'has-error' : undefined}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Sydney"
              onChange={handleChange}
              value={values.city}
              onBlur={handleBlur}
              className={touched.city && errors.city ? 'has-error' : undefined}
            />
          </div>
          <select
            name="state"
            id="state"
            onChange={handleChange}
            value={values.state}
            onBlur={handleBlur}
            className={touched.state && errors.state ? 'has-error' : undefined}
          >
            {/* TODO2: search Icon & auto complete */}
            {australianStates.map((state) => (
              <option value={state} key={state}>
                {state}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              pattern="[0-9]+"
              name="postcode"
              id="postcode"
              placeholder="2000"
              onChange={handleChange}
              value={values.postcode}
              onBlur={handleBlur}
              className={touched.postcode && errors.postcode ? 'has-error' : undefined}
            />
          </div>
        </section>
        <section>
          <h3>Description Information</h3>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              name="description"
              id="description"
              onChange={handleChange}
              value={values.description}
              onBlur={handleBlur}
              className={touched.description && errors.description ? 'has-error' : undefined}
            />
          </div>
        </section>
        <div>
          {/* TODO1 move buttons to top toolbar */}
          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
          <button onClick={handleReset} disabled={isSubmitting}>
            Reset
          </button>
        </div>
      </Form>
    )}
  </Formik>
)
