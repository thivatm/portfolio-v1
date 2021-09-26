import Button from 'components/Button'
import React from 'react'

function Hero() {
   const learnMore = () => {
      window.location.href = '/#aboutme'
   }
   return (
      <div
         id="hero"
         className="min-h-screen font-inter flex flex-col justify-center">
         <div className="flex flex-col-reverse md:flex-row">
            <div className="space-y-6">
               <p className="text-turquo font-fira text-xl">Hello, I'm</p>
               <h1 className="text-magnolia font-bold text-4xl lg:text-7xl tracking-wider">
                  Thivagar.
               </h1>
               <h2 className="text-magnolia text-opacity-75 font-semibold text-xl md:text-4xl tracking-wider">
                  I build web and mobile apps
               </h2>
               <p className="text-gray-400 max-w-xl">
                  I'm a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I'm focused on building accessible, human-centered
                  products at Upstatement.
               </p>
               <Button onClick={learnMore} placeholder="Learn More" />
            </div>
            <div className="md:w-1/2 md:m-auto mb-4">
               <div className="w-2/6 md:w-3/5 md:m-auto relative md:shadow-brand">
                  <img className="" src="/header-bg.jpg" alt="Me" />
               </div>
            </div>
         </div>
      </div>
   )
}
export default Hero
