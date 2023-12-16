import Login from './components/Login.jsx'
import React, { useState } from 'react'
import { Routes,Route, BrowserRouter, useSearchParams } from 'react-router-dom'
import User from './components/User.jsx'
import NoPage from './components/NoPage.jsx'
 function App() {
  const[token,setToken]=useState('')
  return (
<Routes>
  <Route path='/' element={<Login token={token} setToken={setToken}/>}/>
  <Route path='/user' element={<User token={token}/>}/>
  <Route path="*" element={<NoPage />} />
</Routes>

  )
}
export default App