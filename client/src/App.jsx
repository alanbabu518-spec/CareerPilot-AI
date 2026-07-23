import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>

     <Routes>
      <Route path = "/" element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
     </Routes>

     <ToastContainer position="top-center" />

     </>
    
  )
  
}

export default App
