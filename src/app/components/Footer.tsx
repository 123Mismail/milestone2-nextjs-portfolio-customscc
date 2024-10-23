

import React from 'react'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLocationDot ,FaPhone,FaEnvelope, FaFacebook, FaLinkedin} from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
        <section className='footer '>
          {/* left */}
            <div className='footer-content'>
                <div style={{display:"flex", justifyContent:"center" ,alignItems:"center" , gap:"0.4rem" }}>
                    <FaLocationDot style={{fontSize:"30px" ,color:"#FF8F00"}}/>
                <span>
                    <p>21,Revolution Street</p>
                <h3>Paris France</h3>

                </span>
                </div>
                <div style={{display:"flex", justifyContent:"center" ,alignItems:"center" , gap:"0.4rem" }}>
                    <FaPhone style={{fontSize:"30px" ,color:"#FF8F00"}}/>
                <span>
                    <p>Phone </p>
                <h3>+923456979</h3>

                </span>
                </div>
                <div style={{display:"flex", justifyContent:"center" ,alignItems:"center" , gap:"0.4rem" }}>
                    <FaEnvelope style={{fontSize:"30px" ,color:"#FF8F00"}}/>
                <span>
                    <p>Mail</p>
                <h3>mumkinhy@gmail.com</h3>

                </span>
                </div>
            
            
            </div>
            {/* right */}
            <div className='footer-right'>
               <h3>About Me</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil dolorum, odio quo aut quam nobis quisquam excepturi, veritatis tempora cumque soluta, minima praesentium corporis fugiat</p>
               <span style={{ display:"flex" , justifyContent:"center" }}>
                <FaFacebook style={{fontSize:"30px" ,marginRight:"1rem" ,color:"#FF8F00"}}/>
                <FaLinkedin style={{fontSize:"30px" ,marginRight:"1rem" ,color:"#FF8F00"}}/>
                <FaGithubSquare style={{fontSize:"30px" ,marginRight:"1rem" ,color:"#FF8F00"}}/>
               </span>
            </div>
        </section>
    </div>
  )
}

export default Footer