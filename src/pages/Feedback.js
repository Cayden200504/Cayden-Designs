import React from 'react'

export default function Feedback() {
  return (
    <div className="feedbackpage">
      
      <div className = "frame9">
       <div className = "Offers9 "> Feedback </div> 
     </div>
    
         <form className = "Nameinput"> 
              <div class="box1"> 
               <input class="inputbox1" type="text"  required="required"/> 
               <span >FullName</span>
              </div>
            </form>

        <form className = "Emailinput"> 
              <div class="box2"> 
               <input class="inputbox2" type="text"  required="required"/> 
               <span >Email</span>
              </div>
            </form>
 
            <form className = "subinput"> 
              <div class="box3"> 
               <input class="inputbox3" type="text"  required="required"/> 
               <span >Subject</span>
              </div>
            </form>

            <form className = "feedbackinput"> 
              <div class="box4"> 
               <textarea class="inputbox4" id="message"  rows="4" placeholder='Feedback' required="required"/> 
               
              </div>
            </form>

        <button className="feedbackB"> submit </button>


      
    </div>
  )
}
