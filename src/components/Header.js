
import {NavLink} from "react-router-dom"
import * as BiIcons from "react-icons/bi"
import * as BsIcons from "react-icons/bs"

export default function Header() {
    return(
      <> 
        <header className="header sticky">

        <div className="clickablenamebutton">
          
            <li>
              <NavLink className="home1" to="/"> Home </NavLink>  
            </li>

            <li> 
              <NavLink className="special1" to="/special"> Special </NavLink>
             </li>

            <li>
              <NavLink className="mens1" to="/mens"> Men </NavLink> 
             </li>

            <li>
              <NavLink className="women1" to="/women">  Women </NavLink>
             </li>

            <li> 
              <NavLink className="children1" to="/childrens"> Children </NavLink>
             </li>

            <li> 
              <NavLink className="upcomings1"to="/upcomings"> Upcomings </NavLink> 
            </li>
           
            
          </div>
             
          <img className="t-designs" src="./images/tdesign.png" alt=""/> 
        
            <div className = "SearchBar"> 
              <div class="form"> 
               <input  class="textboxbar" type="text" required/> 
               <span for="">Search</span>
              </div>
            </div>
          
          <div className="linksicons"> 
            
            <li>
              <i> <NavLink to="login"> <BiIcons.BiUser className="usericon"/>  </NavLink> </i>
            </li>
            
            <li>
              <i> <BsIcons.BsCart3 className="carticon"/></i>
            </li>

            <li>
              <i> <NavLink to="helpinfo"> <BiIcons.BiHelpCircle className="helpicon"/>  </NavLink> </i>
            </li>

            <li>
              <i> <NavLink to="contacts"> <BiIcons.BiPhone className="phoneicon"/> </NavLink> </i>
            </li>
        
     


          </div>

          

        
      </header>

      </>
      
    )
}