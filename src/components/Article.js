import React from 'react'

function Article({ data }) {
   const goToLink = (link) => {
      window.open(link, '_blank')
   }

   const copyLink = (e, link) => {
      e.stopPropagation()
      navigator.clipboard.writeText(link)
   }

   return (
      <div
         className="bg-brand-800 p-6 space-y-5 rounded-md relative flex flex-col h-72 transition-all transform hover:scale-105"
         onClick={() => goToLink(data.link)}>
         <div className="flex items-center justify-between">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-12 w-12"
               viewBox="3 0 20 20"
               fill="currentColor">
               <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
               />
            </svg>
         </div>
         <div className="flex flex-col justify-between space-y-4 flex-grow">
            <div className="space-y-3">
               <p className="text-lg text-magnolia font-bold">{data.title}</p>
               <p className="text-sm text-gray-300">{data.description}</p>
            </div>
            <div className="flex items-center justify-between">
               <p className="text-sm font-semibold">{data.type}</p>
               <div className="flex items-center space-x-3">
                  <svg
                     onClick={(e) => copyLink(e, data.link)}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 transition-all hover:text-yelo"
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
                     onClick={() => goToLink(data.link)}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 transition-all hover:text-yelo"
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
               </div>
            </div>
         </div>
      </div>
   )
}

export default Article
