
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth insideRegister/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/*' element={<Navigate to={'/'}/>} />

     
     </Routes>
     <Footer/>
    </>
  )
}

export default App
