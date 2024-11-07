
import Image from 'next/image'
import React from 'react'
 
const HeroSection = () => {
  return (
    <div>
        <section className='hero'>
            <div className="content">
                {/* left */}
                <div className='hero-left'>
                    <h1 style={{fontSize:"4rem" , padding:"1rem"}}>Wellcome to my portfolio website</h1>
                    <h3 style={{fontSize:"2.4rem",padding:"1rem"}}>Hi my name is muhammad Ismail And I am frontend developer</h3>
                    <p style={{padding:"1rem"}} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolor omnis pariatur. Aperiam voluptas voluptatem non magnam nisi provident obcaecati ipsam illo, incidunt blanditiis esse nihil quasi rerum earum repudiandae!</p>
                   <div  style={{display:"flex",cursor:"pointer"}}>
                   <button style={{paddingLeft:"1rem",float:"right" ,paddingRight:"1rem" ,backgroundColor:"#FF8F00" ,paddingTop:"1rem", paddingBottom:"1rem" ,marginLeft:"1rem"}}>view cv</button>
                 <a href="/about">  <button style={{paddingLeft:"1rem", paddingRight:"1rem" ,backgroundColor:"#FF8F00" ,paddingTop:"1rem", paddingBottom:"1rem" ,marginLeft:"1rem"}}>  About Me</button></a>
                   </div>
                </div>
                {/* right */}
                <div className='hero-right'>
                    <Image src={"/hero.svg"} height={500} width={500} alt="webdevelopers profile pictures"  className='hero-image'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HeroSection