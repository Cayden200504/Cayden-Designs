import './css/App.css';
import './css/Men.css';
import './css/Women.css';
import './css/Children.css';
import './css/Upcomings.css';
import './css/Special.css';
import './css/Header.css';
import './css/Contacts.css';
import './css/Helpinfo.css';
import './css/Login.css'
import './css/Register.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homes from './pages/Homes'
import Special from './pages/Special'
import Header from './components/Header'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Childrens from './pages/Childrens'
import Upcomings from './pages/Upcomings'
import Error from './pages/Error'
import Contacts from './pages/Contacts'
import Helpinfo from './pages/Helpinfo'
import Login from './pages/Login'
import Register from './pages/Register'

import ScrollToTop from './ScrollToTop'

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      
      <ScrollToTop/> 

        <Routes>
          
          

          <Route path= "/" element={<Homes/>} />
          <Route path= "/special" element={<Special/>} />
          <Route path= "/mens" element={<Mens/>} />
          <Route path= "/women" element={<Women/>} />
          <Route path= "/childrens" element={<Childrens/>} />
          <Route path= "/upcomings" element={<Upcomings/>} />
          <Route path= "*" element={<Error/>} />
          <Route path= "/contacts" element={<Contacts/>} />
          <Route path= "/helpinfo" element={<Helpinfo/>} />
          <Route path= "/login" element={<Login/>} />
          <Route path= "/register" element={<Register/>} />
          
        </Routes> 
        
        <Header/>

      </BrowserRouter>
    </div>
  );
}



