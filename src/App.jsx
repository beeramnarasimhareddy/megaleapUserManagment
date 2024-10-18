import React from 'react'
import Userlist from './components/Userlist'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import Additionaldetails from './components/Additionaldetails'
const App = () => {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Userlist/>}>
    <Route path='Additionaldetails' element={Additionaldetails}/>
    </Route>
    </Routes>
    <Outlet/>
   </BrowserRouter>
   
   
  )
  
}

export default App
