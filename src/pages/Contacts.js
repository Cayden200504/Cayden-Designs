
import { useNavigate } from "react-router-dom"

export default function Contacts() {
    const navigate = useNavigate()
    const Feedback = () => {
        navigate("/Feedback")
    }

    return(
    
    <div className = "contactpage">

     <div className = "frame5">
      <div className = "Offers5 "> Contact  </div> 
     </div>

    <div className="addressbox">
        <p className="textforaddress"> Address: 
           
           <p>123 Hounslow High Street, </p>
           <p>Hounslow, London, </p>
           <p>TW3 1QT, United Kingdom</p>        
        </p>
    </div>


    <div className="timetablebox">
        <p className="textfortimetable"> TimeTable 
    <p> Monday: "9:00 AM - 6:00 PM" </p>

    <p> Tuesday: "9:00 AM - 6:00 PM" </p>

    <p>   Wednesday: "9:00 AM - 6:00 PM" </p> 

    <p> Thursday: "9:00 AM - 6:00 PM"</p>

    <p> Friday: "9:00 AM - 6:00 PM" </p>

    <p> Saturday: "Closed"</p>

    <p>Sunday: "Closed"</p> 
        
        
         </p>
    </div>
    
     
    
    <button class="btn">
    <div class="wrapper">
        <p class="text" onClick={Feedback}>Feedback </p>

        <div class="flower flower1">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower2">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower3">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower4">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower5">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
        <div class="flower flower6">
            <div class="petal one"></div>
            <div class="petal two"></div>
            <div class="petal three"></div>
            <div class="petal four"></div>
        </div>
    </div>
</button>


     <iframe title="Directions" className="mapping" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.043447789717!2d-0.4733659230729275!3d51.549102307655666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766dd639031891%3A0xc9a6be2a0e101d4e!2sUxbridge%20College!5e0!3m2!1sen!2suk!4v1685054380472!5m2!1sen!2suk" 
    
       style= {{border:"0"}}  loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">

      </iframe>




    
    
     <img className="mapicon1" src="./images/Mapforcontactpage.png" alt=""/> 
    


    </div>
   

    )
}