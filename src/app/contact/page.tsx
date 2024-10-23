
import React from 'react'
import { FaHome ,FaPhone,FaEnvelope} from "react-icons/fa";
const ContactSection = () => {
  return (
    <div>
        <section className='contact-section'>
            <h2 style={{color:"#26355D" ,padding:"1rem"}}>Contact Us</h2>
            <p style={{fontSize:"18px", lineHeight:"1.4rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium ex consectetur sequi placeat culpa.<br></br> Numquam non modi esse saepe officiis? Iusto ratione corrupti quo. Corporis delectus atque ullam dolorem.</p>
            <form  className='form-contact'>
                {/* contact left */}
                <div className='contact-left'>
                 <div className='left-contant-icons'>
                    <FaHome style={{fontSize:"50px" ,color:"#FF8F00"}}/> <span>
                        <h3 style={{color:"#26355D"}}>Address</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit delectus ratione dicta dolores, illum nostrum nulla!</p>
                    </span>
                   
                    
                 </div>
                 <div className='left-contant-icons'>
                    <FaPhone style={{fontSize:"50px" ,color:"#FF8F00"}}/> <span>
                        <h3 style={{color:"#26355D"}}>Phone</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit delectus ratione dicta dolores, illum nostrum nulla!</p>
                    </span> 
                 </div>
                 <div className='left-contant-icons'>
                    <FaEnvelope style={{fontSize:"50px", color:"#FF8F00"}}/> <span>
                        <h3 style={{color:"#26355D"}}>Email</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit delectus ratione dicta dolores, illum nostrum nulla!</p>
                    </span>
                    
                    
                 </div>
                
                </div>
                {/* contact right */}
             <div className='contact-right'>
             <div className='right-content'>
             <label  className='labels' htmlFor="#">Name</label>
                <input type="text" className='inputs' placeholder='Enter your first name here' />
                <label className='labels' htmlFor="#">Last Name</label>
                <input type="text" className='inputs' placeholder='Enter your last name here' />
            
                <label className='labels' htmlFor="#">Message</label>
                <textarea  rows={4} className='inputs' name="message" id="message"></textarea>

                <button> Send</button>
             </div>
            </div>
            </form>
        </section>
    </div>
  )
}

export default ContactSection