import Button from 'components/Button'
import React from 'react'

function Contact() {
   const reachMe = () => {
      window.open('mailto:thivagartm@gmail.com', '_blank')
   }
   return (
      <div
         id="contact"
         className="h-screen flex justify-center items-center flex-col font-inter text-white">
         <div className="animate__animated anim text-center">
            <h3 className="font-fira text-2xl font-semibold text-white mb-8">
               <span className="text-turquo font-light">05.</span> Get In Touch
            </h3>
            <p className="text-lg text-gray-400 text-center mb-8">
               Although I'm not currently open for any new job opportunities,
               I'm always open to talk I’m always open to discussing product
               development work or mentoring. If you have any questions, please
               do not hesitate to drop into my inbox. I'll try my best to get
               back to you asap!
            </p>
            <Button onClick={reachMe} placeholder="Reach Me" />
         </div>
      </div>
   )
}

export default Contact
