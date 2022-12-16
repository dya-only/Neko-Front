import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Nav from './components/nav'
import Index from './pages/index'

function App() {

  return (
    <Fragment>
      <Nav />
      <Index />
    </Fragment>
  )
}

export default App
