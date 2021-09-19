import React from 'react'

function Job({ data }) {
   return (
      <div className="font-inter space-y-4 px-12">
         <div className="space-y-2">
            <p className="text-2xl font-fira font-bold tracking-wide text-yelo">
               {data.title}
            </p>
            <p className="font-fira font-medium">{data.duration}</p>
         </div>
         <ul className="space-y-3 text-gray-300">
            {data.description.map((item, index) => (
               <li key={index} className="flex space-x-2">
                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-turquo"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                           fillRule="evenodd"
                           d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                           clipRule="evenodd"
                        />
                     </svg>
                  </span>
                  <span className="flex-grow">{item}</span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Job
