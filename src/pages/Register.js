import {NavLink} from "react-router-dom"

export default function Register() {
    return(
    
     <div className = "register">

     <div className = "frame7">
      <div className = "Offers7 "> Register </div> 
     </div>

    <div className="register-text">
       <p> Please fill in the fields below </p>
    </div>

   

       <form> 
            <div class="form4"> 
               <input class="textbox-first" type="text"  required="required"/> 
               <span >First name</span>
            </div>
        </form>


        <form> 
              <div class="form5"> 
               <input class="textbox-second"  type="text" required="required"/> 
               <span>Second name</span>
              
              </div>
        </form>
           
           
        <form> 
            <div class="form6"> 
               <input class="textbox-third"  type="text" required="required"/> 
               <span> E-mail </span>
            </div>
        </form>

            
        <form> 
            <div class="form7"> 
               <input class="textbox-forth"  type="password" required="required"/> 
               <span>Password</span>
            </div>
        </form>
   
        <i> 
         <NavLink className="login1"to="/login"> Login  </NavLink> 
        </i>
        
        <div className="Already-have-an-account"> <p> Already have an account? </p> </div>

    <button className="registerbutton"> <p className="registertext"> CREATE ACCOUNT </p></button>

    


    </div>
   

    )
}