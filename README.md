# Crunch Accounting

User Story: As an accountant, I would like to record the details of a new client so that I quickly retrieve those details and contact them when required.

## App

- built with React
- needs to be responsive
  Unit Test (Jest, react-testing-library)

### Components:

Hierarchy:

- App
  - Header
  - CreateContactForm (formState, onSubmit, modalVisible, modalClick)
    - Toolbar
    - Form
      - Inputs
    - Modal
  - Footer

Form Input Types:

- DropDown (title, States)
- Text (valid email, valid phone, valid postal code)
- Textarea
- Checkbox

Validation per field

Cancel clears form
Save form, IF all field valid, then confirmation modal

Confirmation Modal (similar layout as form)
Can close modal

### TO CLARIFY:

- Company Name field: optional or required?
- For invalid fields, should the UI indicate an error visually (red border) and/or display more details with a text message

### TODO:

- what's left TBD

### Future Considerations:

- standardize lint rules (eslint/prettier)
- pre-commit hooks (husky)
- deployment (AWS S3)
- CI/CD (Terraform + Circle CI?)

### External Dependencies:

- TBD: backend to persist client data

---

## Available Scripts

In the project directory, you can run:

First time? `npm install`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
