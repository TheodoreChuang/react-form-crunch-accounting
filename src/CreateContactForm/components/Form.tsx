import React from 'react'
import { Formik } from 'formik'
// import * as Yup from 'yup'

// const ValidationSchema = Yup.object().shape({
//   firstName: Yup.string().min(1).max(255).required(),
// })

export const Form = () => (
  <Formik
    initialValues={{ firstName: '' }}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
    {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" onChange={handleChange} value={values.firstName} />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    )}
  </Formik>
)
