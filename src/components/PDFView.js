import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import { withSize } from 'react-sizeme'

function PDFView({ size }) {
   const [numPages, setNumPages] = useState(null)
   const [pageNumber, setPageNumber] = useState(1)

   const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages)
   }

   const showPDF = () => {
      window.open('CV.pdf', '_blank')
   }

   /**
    * Change PDF Page
    * @param offset
    */
   const changePage = (offset) => {
      setPageNumber((pageNum) => {
         const result = pageNum + offset
         if (0 < result && result <= numPages) {
            return result
         } else {
            return pageNum
         }
      })
   }

   return (
      <div className="relative">
         <Document file="CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page width={size.width} pageNumber={pageNumber} />
         </Document>
         <div className="absolute z-40 top-4 right-4 p-2 bg-white shadow-lg text-brand rounded-xl">
            <svg
               onClick={() => showPDF()}
               xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4"
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
         <div className="absolute bottom-4 left-1/4 z-40 flex items-center space-x-2 text-brand bg-white shadow-lg px-4 py-2 rounded-full">
            <svg
               onClick={() => changePage(-1)}
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               viewBox="0 0 20 20"
               fill="currentColor">
               <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
               />
            </svg>
            <p className="font-fira">{`${pageNumber} of ${numPages}`}</p>
            <svg
               onClick={() => changePage(+1)}
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               viewBox="0 0 20 20"
               fill="currentColor">
               <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
               />
            </svg>
         </div>
      </div>
   )
}

export default withSize({
   refreshRate: 128,
   refreshMode: 'throttle',
   monitorHeight: false,
})(PDFView)
