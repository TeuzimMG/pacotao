import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from './routes/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
