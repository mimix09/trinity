import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from '../app/screens/MainPage'
import Grafik from '../app/screens/Grafik'
import KoloFortuny from '../app/screens/KoloFortuny'
import Kalendarz from '../app/screens/Kalendarz'
import Inne from '../app/screens/Inne'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} ></Route>
        <Route path='/1' element={<Grafik />} ></Route>
        <Route path='/2' element={<KoloFortuny />} ></Route>
        <Route path='/3' element={<Kalendarz />} ></Route>
        <Route path='/4' element={<Inne />} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
