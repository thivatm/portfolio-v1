import React from 'react'

function Footer() {
   return (
      <div className="py-8 space-y-2 text-sm">
         <p className="text-gray-300 text-center">
            for developers by a{' '}
            <a href="#hero" className="text-turquo hover:underline">
               developer
            </a>{' '}
            with <span className="text-turquo">❤</span>
         </p>
         <p className="text-center text-turquo hover:underline">
            <a
               href="https://github.com/thivatm/vanguard-01"
               className="flex items-center justify-center space-x-2">
               <span>take me to the code</span>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                     fillRule="evenodd"
                     d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                     clipRule="evenodd"
                  />
               </svg>
            </a>
         </p>
      </div>
   )
}

export default Footer
