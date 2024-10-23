
import Image from 'next/image'
import React from 'react'
 
const HeroSection = () => {
  return (
    <div>
        <section className='hero'>
            <div className="content">
                {/* left */}
                <div className='hero-left'>
                    <h1>Wellcome to my portfolio website</h1>
                    <h3>Hi my name is muhammad Ismail And I am frontend developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolor omnis pariatur. Aperiam voluptas voluptatem non magnam nisi provident obcaecati ipsam illo, incidunt blanditiis esse nihil quasi rerum earum repudiandae!</p>
                    <button>view cv</button>
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