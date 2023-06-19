import React from 'react'

export default function Feedback() {
  return (
    <div className="feedbackpage">





    
<form className = "Nameinput"> 
              <div class="box1"> 
               <input class="inputbox1" type="text"  required="required"/> 
               <span >Email</span>
              </div>
            </form>

        <form className = "Emailinput"> 
              <div class="box2"> 
               <input class="inputbox2" type="text"  required="required"/> 
               <span >Email</span>
              </div>
            </form>

        <input className="inputbox3" type="text"/>
        <textarea className="inputbox4"/>
        <button className="feedbackB"> submit </button>


      
    </div>
  )
}
