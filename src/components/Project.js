import React, { useEffect } from 'react'

function Project({ data }) {
   const goToLink = (e, link) => {
      e.stopPropagation()
      window.open(link, '_blank')
   }

   const copyLink = (e, link) => {
      e.stopPropagation()
      navigator.clipboard.writeText(link)
   }

   const callback = function (entries) {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp')
            entry.target.classList.remove('opacity-0')
         }
      })
   }

   useEffect(() => {
      const observer = new IntersectionObserver(callback)

      const targets = document.querySelectorAll('.anim.animate__animated')
      targets.forEach(function (target) {
         target.classList.add('opacity-0')
         observer.observe(target)
      })
   }, [])

   return (
      <div
         className="flex flex-col bg-brand-800 p-8 rounded-md transition-all animate__animated anim"
         onClick={(e) => goToLink(e, data.link)}>
         <p className="flex items-center justify-between text-2xl font-bold text-turquo tracking-wider">
            <span>{data.title}</span>
            <svg
               onClick={() => goToLink(data.link)}
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-gray-300"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
               />
            </svg>
         </p>
         <div className="flex-grow">
            <p className="tracking-wide my-4 text-gray-400 text-justify">
               {data.description}
            </p>
            <div className="flex items-center space-x-4">
               {data.technologies.map((elem, index) => (
                  <span
                     key={index}
                     className="font-fira font-bold text-magnolia">
                     {elem}
                  </span>
               ))}
            </div>
         </div>
         <div className="flex items-center justify-end space-x-4 mt-4">
            <svg
               onClick={(e) => copyLink(e, data.link)}
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-turquo transition-all hover:text-gray-500"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
               />
            </svg>
            <svg
               onClick={(e) => goToLink(e, data.codeLink)}
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 text-turquo transition-all hover:text-gray-500"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
               />
            </svg>
         </div>
      </div>
   )
}

export default Project
