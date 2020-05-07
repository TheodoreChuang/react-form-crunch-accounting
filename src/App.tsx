import React from 'react'
import 'normalize.css'

import './App.css'

import { Header } from './components/Header'
import { CreateContactForm } from './CreateContactForm/CreateContactForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <CreateContactForm />
      <Footer />
    </div>
  )
}

export default App
