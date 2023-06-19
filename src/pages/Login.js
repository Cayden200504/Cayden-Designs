import {NavLink} from "react-router-dom"

export default function Login() {
    return(
    
    <div className = "login">

     <div className = "frame6">
      <div className = "Offers6 "> Login  </div> 
     </div>

    <div className="e-mail-text">
       <p> Please enter your E-mail & Password</p>
    </div>

   

    <form className = "Emailinput"> 
              <div class="form2"> 
               <input class="textbox" type="text"  required="required"/> 
               <span >Email</span>
              </div>
            </form>


            <form className = "passwordinput"> 
              <div class="form3"> 
               <input class="textbox-pass"  type="password" required="required"/> 
               <span>Password</span>
               <p className="forgotpassword"> Forgot Password? </p>
              </div>
            </form>

       
    
  
    <button className="loginbutton"> <p className="logintext"> LOGIN</p></button>
    
    <i> 
      <NavLink className="register1"to="/register"> Create an account </NavLink> 
    </i>

    <div className="create-an-account"> <p> New customer? </p> </div>
    
    </div>
   
   
  
    )
}