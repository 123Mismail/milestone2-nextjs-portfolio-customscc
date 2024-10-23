
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='main-abut'>
        <section className='about '>
            <div className='about-content'>
                {/* left side  */}
                <div className='about-left'>
                    <h2>About Me</h2>
                    <h3>Hello I am a frontend developer .</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, quis sit. Quisquam, illum! Nam aperiam iusto exercitationem cumque eligendi accusamus a quae ducimus, libero et nesciunt inventore eaque possimus illo.</p>
                    <button>My cv</button>
                </div>
                {/* right side  */}
                <div className='about-right'>
                    <Image src={'/about.svg'} height={500} width={500} alt='about section image' className='about-image'></Image>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutPage