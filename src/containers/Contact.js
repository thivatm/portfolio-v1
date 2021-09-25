import Button from 'components/Button'
import React from 'react'

function Contact() {
   const reachMe = () => {
      window.open('mailto:thivagartm@gmail.com', '_blank')
   }
   return (
      <div
         id="contact"
         className="pb-32 lg:pb-0 lg:h-screen flex justify-center items-center flex-col font-inter text-white">
         <div className="animate__animated anim text-center space-y-8">
            <h3 className="font-fira text-2xl font-semibold text-white">
               <span className="text-turquo font-light">05.</span> Get In Touch
            </h3>
            <p className="md:text-lg text-gray-400 text-center">
               Although I'm not currently open for any new job opportunities,
               I'm always open to have a chat. If you have any questions, please
               do not hesitate to drop into my inbox. I'll try my best to get
               back!
            </p>
            <Button onClick={reachMe} placeholder="Reach Me" />
         </div>
      </div>
   )
}

export default Contact
