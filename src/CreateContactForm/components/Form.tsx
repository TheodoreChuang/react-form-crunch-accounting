import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const titles = ['None', 'Mr', 'Mrs', 'Ms', 'Mx', 'Dr']

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
  companyName: Yup.string().min(1).max(255),
  // TODO check valid phone formats + add regex
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
  postcode: Yup.number().min(4).max(4),
  description: Yup.string().min(1).max(1000), //.required(),
})

const formInitialValues = {
  title: titles[0],
  firstName: '',
  lastName: '',
  accountName: '',
  companyName: '',
  phone: '',
  fax: '',
  jobTitle: '',
  email: '',
  emailOptOut: true,
  streetNumberAndStreet: '',
  city: '',
  state: '',
  postcode: '',
  description: '',
}

export const Form = () => (
  <Formik
    initialValues={formInitialValues}
    validationSchema={ValidationSchema}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
    {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        {/* TODO delete me later */} {JSON.stringify(values, null, 2)}
        <div>
          <h3>Contact Information</h3>
          <div>
            <select name="title" id="title" onChange={handleChange} value={values.title}>
              {titles.map((title) => (
                <option value={title}>{title}</option>
              ))}
            </select>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" onChange={handleChange} value={values.firstName} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" onChange={handleChange} value={values.lastName} />
          </div>
          <div>
            <label htmlFor="accountName">Account Name</label>
            <input type="text" name="accountName" id="accountName" onChange={handleChange} value={values.accountName} />
          </div>
          <div>
            <label htmlFor="companyName">Company Name (optional)</label>
            <input type="text" name="companyName" id="companyName" onChange={handleChange} value={values.companyName} />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" pattern="[0-9]+" name="phone" id="phone" onChange={handleChange} value={values.phone} />
          </div>
          <div>
            <label htmlFor="fax">Fax (optional)</label>
            <input type="tel" pattern="[0-9]+" name="fax" id="fax" onChange={handleChange} value={values.fax} />
          </div>
          <div>
            <label htmlFor="jobTitle">Title (optional)</label>
            <input type="text" name="jobTitle" id="jobTitle" onChange={handleChange} value={values.jobTitle} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} value={values.email} />
          </div>
          <label htmlFor="emailOptOut">Email Opt Out</label>
          <input
            type="checkbox"
            id="emailOptOut"
            name="emailOptOut"
            onChange={handleChange}
            checked={values.emailOptOut}
          />
        </div>
        <div>
          <h3>Address Information</h3>
          <div>
            <label htmlFor="streetNumberAndStreet">Street No. & Street</label>
            <input
              type="text"
              name="streetNumberAndStreet"
              id="streetNumberAndStreet"
              onChange={handleChange}
              value={values.streetNumberAndStreet}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" onChange={handleChange} value={values.city} />
          </div>
          <select name="state" id="state" onChange={handleChange} value={values.state}>
            {australianStates.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
          <div>
            <label htmlFor="postcode">Postcode</label>
            <input
              type="text"
              pattern="[0-9]+"
              name="postcode"
              id="postcode"
              onChange={handleChange}
              value={values.postcode}
            />
          </div>
        </div>
        <div>
          <h3>Description Information</h3>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              name="description"
              id="description"
              onChange={handleChange}
              value={values.description}
            />
          </div>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    )}
  </Formik>
)
