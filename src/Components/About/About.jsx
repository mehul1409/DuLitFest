import React from 'react'
import './About.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import aboutpic from './aboutpic.png'
import aboutpicphone from './aboutpicphone.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
   <>
   
   {/* <SectionHeader text="ABOUT US" /> */}
    <div className='about-desktop'>
        
        {/* <div className="aaleft"> */}
        
        <div className="aabout-left">
        <SectionHeader text="ABOUT US" />
        <div className="about-left-inner">
        Following the well-received inaugural Delhi University Literature Festival, which featured engaging speaker sessions, literary contests, and insightful book talks commemorating DU's centennial and India's G20 leadership, we are thrilled to announce an even more expansive, inclusive, and lively second edition.
        </div>
        <div className="about-left-inner">
        Officiated by the University of Delhi, we are well-positioned to establish this as the nation's foremost and largest student-led literary event. Set against the backdrop of Delhi's brisk January ambiance, we are curating a three-day literary fiesta at DU's esteemed Shri Ram College of Commerce in the North Campus, scheduled for January 19th to 21st, 2024. Nestled within this historic institution, our aim is not only to celebrate literature but also to infuse it with renewed vigour and enthusiasm.
        </div>
        <div className="about-left-inner">
        The festival promises a diverse array of activities, including author dialogues, curated panel discussions, engaging workshops, shopping and culinary delights, captivating musical performances, platforms for emerging literary talent, curated book exhibitions, competitions, and more.
        </div>

        <div className="about-left-inner">
        We are privileged to once again receive the guidance of Mr. Sanjeev Sanyal, Member of the Economic Advisory Council to the Prime Minister, as our Festival Patron, and Dr. Swapan Dasgupta, Padma Bhushan awardee, esteemed columnist, and former Rajya Sabha MP, as the Festival Director.
        </div>
        
       <div className="about-left-inner">
       Our vision is to establish this literary festival as a cherished tradition and set the tradition in stone for generations of DU students and literary enthusiasts to celebrate and perpetuate their love for literature.
       </div>


        </div>
        {/* </div> */}

        <div className="aabout-right">
         <img src={aboutpic} alt="about-image" className='about-desktop-pic' />
        </div>

    </div>

    <div className='about-phone'>
        
        {/* <div className="aaleft"> */}
        
        <div className="aabout-top">
        <SectionHeader text="ABOUT US" />
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay:0.3 }}
        viewport={{ once: true }}
        className="aabout-left-inner">
        Following the well-received inaugural Delhi University Literature Festival, which featured engaging speaker sessions, literary contests, and insightful book talks commemorating DU's centennial and India's G20 leadership, we are thrilled to announce an even more expansive, inclusive, and lively second edition.
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="aabout-left-inner">
        Officiated by the University of Delhi, we are well-positioned to establish this as the nation's foremost and largest student-led literary event. Set against the backdrop of Delhi's brisk January ambiance, we are curating a three-day literary fiesta at DU's esteemed Shri Ram College of Commerce in the North Campus, scheduled for January 19th to 21st, 2024. Nestled within this historic institution, our aim is not only to celebrate literature but also to infuse it with renewed vigour and enthusiasm.
        </motion.div>
         
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="aabout-phone-pic-container">
         <img src={aboutpicphone} alt="about-image" className='about-phone-pic' />
        </motion.div>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="aabout-left-inner">
        The festival promises a diverse array of activities, including author dialogues, curated panel discussions, engaging workshops, shopping and culinary delights, captivating musical performances, platforms for emerging literary talent, curated book exhibitions, competitions, and more.
        </motion.div>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="aabout-left-inner">
        We are privileged to once again receive the guidance of Mr. Sanjeev Sanyal, Member of the Economic Advisory Council to the Prime Minister, as our Festival Patron, and Dr. Swapan Dasgupta, Padma Bhushan awardee, esteemed columnist, and former Rajya Sabha MP, as the Festival Director.
        </motion.div>
        
       <motion.div 
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 1.5, delay: 0.3 }}
       viewport={{ once: true }}
       className="aabout-left-inner">
       Our vision is to establish this literary festival as a cherished tradition and set the tradition in stone for generations of DU students and literary enthusiasts to celebrate and perpetuate their love for literature.
       </motion.div>


        </div>
        {/* </div> */}

    </div>

   </>
  )
}

export default About