# Crunch Accounting

## App

User Story: As an accountant, I would like to record the details of a new client so that I quickly retrieve those details and contact them when required.

### Acceptance Criteria:

- Create Contact Form:
  - fields per specs
  - validation on fields
  - only able to save if all fields are valid
    - pops up modal
    - assumed form to be reset
  - can cancel/reset form
- Modal
  - (pops up after valid form save)
  - can close
- App needs to be responsive

### Components:

Hierarchy:

- App
  - Header
  - CreateContactForm (formState, onSubmit, modalVisible, modalClick)
    - Form
      - Toolbar
      - Inputs
    - Modal
  - Footer

### TO CLARIFY:

- Company Name field: optional or required? (discrepancy between mock up and spec)
- State field: should be dropdown or text input (discrepancy between mock up and spec)
- For invalid fields, should the UI indicate an error visually (red border) and/or display more details with a text message

### TODO:

- lots of styling (alignment, spacing, colors, select field)
- form
  - better form validation (phone numbers)
  - error icon (!)
- finish modal or hide with feature flag until complete
- unit test (Jest, react-testing-library)
- better favicon (transparent background)

### Future Considerations:

- standardize lint rules (eslint/prettier)
- pre-commit hooks for lint and tests? (husky)
- plan for deployment (AWS S3)
- CI/CD (Terraform + Circle CI?)
- css/styling strategy if app is expected to grow

### External Dependencies:

- TBD: backend to persist client data

---

## Running this project for the first time?

in your terminal:

```console
git clone git@github.com:TheodoreChuang/react-form-crunch-accounting.git
cd react-form-crunch-accounting
npm i
npm start
```

## Available Scripts

In the project directory, you can run:

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
