import React from 'react'
import '../styles/mainfooter.css'
import vehicle from '../assets/images (6) 2.png'
import facebook from '../assets/icons8-facebook.svg'
import instagram from '../assets/icons8-instagram.svg'
import gmail from '../assets/icons8-gmail.svg'

const MainFooter = () => {
    return (
        <>
            <header>
                <div className = "container d-block d-md-flex justify-content-between py-4 head ">
                    {/* first main footer */}

                   <div className =  "sign">
                       <div className = 'div-img pb-3'>
                          <img src= {vehicle} alt="vehiccle-logo"/> 
                       </div>
                       <div className ='tag'>
                           <p>Subscribe to our newsletter to be one of the first to receive updates on Innoson Group</p>
                           <h3>Newsletter Sign Up</h3>
                       </div>
                       <div>
                           <input type="email" name="email" id="Email" Placeholder = "Email Address"/>
                           <label htmlFor="email"> Email Address</label>
                       </div>
                  </div>
                  {/* second main footer  */}

                  <div className = 'address'>
                     <h3>Address</h3>
                     <div className = "office">
                         <h4 className = "office">Head Office</h4>
                         <p>No 95 Owerri Road, P.O. Box 1068, Umudum,Nnewi, Anambra State</p>
                     </div>
                     <div className = "office">
                         <h4>Lagos Office</h4>
                         <p>Plot 1 Block A, Amuwo Odofin Ind. Estate,Oshodi,Apapa,Lagos State</p>
                     </div>
                  </div>
                  {/* third main footer  */}

                  <div className =" d-flex flex-column gap-2 contact">
                      <h3>Contact</h3>
                      <div className = "d-flex align-items-center pb-2 gap-1 face">
                          <img src= {facebook} alt="facebook-logo" className = "bok"/>
                          <span>@innosongroup</span>
                      </div>
                      <div className = "d-flex align-items-center gap-1 pb-2 face" >
                          <img src= {instagram} alt="ig-logo" className = "bok"/>
                          <span>@innosongroup</span>
                          
                      </div>
                      <div className ="d-flex align-items-center gap-2 pb-1 face">
                          <img src = {gmail} alt="gmail-logo" className = "bok"/>
                          <span>sales@innosongroup.com</span>
                      </div>
                  </div>
                </div>
                {/* hr line and text */}
                <div className = ' container group'>
                <hr/>
                 <p> &copy; 2016 Innoson Group of Companies</p>
                </div>

               
            </header>
        </>
    )
}

export default MainFooter
