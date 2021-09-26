// import PDFView from 'components/PDFView'
import React, { useEffect, useState } from 'react'

function AboutMe() {
   const [skills, setSkills] = useState([])

   const goToCV = () => {
      window.open(
         'https://drive.google.com/file/d/1YIuTivirT3ELZR9HxEnzF_H7szOfmyCY/view?usp=sharing',
         '_blank'
      )
   }

   useEffect(() => {
      setSkills([
         'JavaScript',
         'Angular',
         'React',
         'Next',
         'Ionic',
         'Node JS',
         'MongoDB',
      ])
   }, [])

   return (
      <div
         id="aboutme"
         className="h-screen flex justify-center flex-col font-inter text-white py-12 lg:py-0">
         <h3 className="font-fira text-2xl font-semibold text-white mb-8">
            <span className="text-turquo font-light">01.</span> About Me
         </h3>
         <div className="flex items-center justify-between flex-col space-y-8 lg:space-y-0 lg:flex-row animate__animated anim">
            <div className="lg:w-2/3 md:pr-8">
               <p className="text-gray-400 mb-4 text-justify">
                  Hello! I am Thivagar and I enjoy building everything, from
                  small business sites to rich interactive web and mobile apps.
                  My passion for programming started back in 2016 when i first
                  made my static HTML website along with CSS and JavaScript.
                  Then it motivated me to pursure online courses after finishing
                  my Advance Level Examination.
               </p>
               <p className="text-gray-400 mb-4 text-justify">
                  In 2018 i started my Internship (Software Engineering) at{' '}
                  <a
                     className="text-turquo hover:underline"
                     href="https://www.ifs.com/">
                     IFS
                  </a>
                  . After graduating my college i joined{' '}
                  <a
                     className="text-turquo hover:underline"
                     href="https://tracified.com/">
                     Tracified
                  </a>{' '}
                  as a Software Engineer. My main role is to maintain write
                  modern, performant, maintainable code for the Product
                  Tracified which consists of Web applications and mobile
                  applications
               </p>

               <div className="w-full">
                  <p className="text-gray-400 mb-4 text-justify">
                     Below are the few technologies I am most familiar with.
                  </p>

                  <ul className="font-fira grid grid-cols-2">
                     {skills.map((skill, index) => (
                        <li
                           key={index}
                           className="pb-2 flex items-center justify-start space-x-2 text-gray-400">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-turquo"
                              viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                 fillRule="evenodd"
                                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                 clipRule="evenodd"
                              />
                           </svg>
                           <span>{skill}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/3 px-8 animate__animated anim">
               <div className="w-full m-auto relative cursor-pointer">
                  <div
                     onClick={() => goToCV()}
                     className="absolute flex items-center justify-center w-full h-full inset-0 z-30 bg-turquo bg-opacity-20 backdrop-filter backdrop-blur-sm transition-all hover:bg-opacity-0 hover:backdrop-blur-none">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-brand"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                        <path
                           fillRule="evenodd"
                           d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </div>
                  <img src="/cv.jpg" alt="PDF"></img>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutMe
