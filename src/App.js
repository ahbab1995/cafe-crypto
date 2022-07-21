import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coins from './components/Coins/Coins'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/coins' element={<Coins></Coins>}></Route>
      </Routes>
    </div>
  )
}

export default App
