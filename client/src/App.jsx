import React from 'react'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './Pages/Auth'

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage/>} />
      <Route />
    </Routes>
  )
}

export default App