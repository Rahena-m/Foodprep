import  React ,{useState}from 'react'
import Navbar from './Components/Navbar/Navbar'
import Cart from'./screens/Cart/Cart'
import Home from './screens/Home/Home'
import Placeholder from './screens/Placeholder/Placeholder'
import Footer from './Components/Footer/Footer'
import {Routes,Route} from'react-router-dom'
import LoginPopup from './Components/LoginPopup/LoginPopup'
const App=()=> {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/order' element={<Placeholder/>}></Route>
      </Routes>
       
    </div>
    <Footer/>
    </>
  )
}

export default App
