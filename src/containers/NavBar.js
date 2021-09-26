import React, { useEffect, useState } from 'react'

let newValue = 0
let oldValue = 0

function NavBar() {
   const [navItems, setNavItems] = useState([])
   const [show, setShow] = useState(true) //Navbar Visisbility
   const [isOpen, setIsOpen] = useState(false)

   // Control Navbar visibility
   const controlNavbar = () => {
      console.log(window.pageYOffset)
      newValue = window.pageYOffset
      if (oldValue > newValue) {
         setShow(true)
      } else if (oldValue < newValue) {
         setShow(false)
      }
      if (100 >= window.pageYOffset && window.pageYOffset >= 0) {
         setShow(true)
      }
      oldValue = newValue
   }

   // Open or close navbar: Mobile Responsive
   const toggleNavbar = (flag) => {
      setIsOpen(flag)
   }

   useEffect(() => {
      setIsOpen(false)
      setNavItems([
         {
            name: 'About',
            link: '#aboutme',
         },
         {
            name: 'Work',
            link: '#experience',
         },
         {
            name: 'Projects',
            link: '#projects',
         },
         {
            name: 'Articles',
            link: '#blogs',
         },
         {
            name: 'Contact',
            link: '#contact',
         },
      ])
      window.addEventListener('scroll', controlNavbar)
      return () => {
         window.removeEventListener('scroll', controlNavbar)
      }
   }, [])

   return (
      <div
         className={`transform ${
            show ? 'translate-y-0' : '-translate-y-20'
         } transition duration-700 bg-brand text-white fixed z-50 inset-x-0 top-0 shadow-md backdrop-filter backdrop-blur bg-opacity-80`}>
         <div className="h-20 py-3 px-8 md:px-12 font-fira flex items-center justify-between">
            <div className="logo-container">
               <img className="w-7" alt="logo" src="/logo.png" />
            </div>

            {/* Nav Button */}
            <div className="lg:hidden absolute z-40 top-5 right-6">
               {isOpen ? (
                  <svg
                     onClick={() => toggleNavbar(false)}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-8 w-8"
                     viewBox="0 0 20 20"
                     fill="currentColor">
                     <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                     />
                  </svg>
               ) : (
                  <svg
                     onClick={() => toggleNavbar(true)}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-8 w-8"
                     viewBox="0 0 20 20"
                     fill="currentColor">
                     <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                     />
                  </svg>
               )}
            </div>

            {/* Contents */}
            <ul
               className={`lg:hidden flex flex-col absolute top-0 right-0 space-y-8 items-center justify-center bg-brand-900 h-screen whitespace-nowrap overflow-hidden transition-width ease-in-out duration-600 ${
                  isOpen ? 'md:w-1/2 w-2/3' : 'w-0'
               }`}>
               {navItems.map((item, index) => (
                  <li key={index} className="hover:text-turquo cursor-pointer">
                     <a
                        href={item.link}
                        onClick={() => toggleNavbar(false)}
                        className="flex items-center space-x-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-3 w-3 text-turquo"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fillRule="evenodd"
                              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span>{item.name}</span>
                     </a>
                  </li>
               ))}
            </ul>

            <ul className="hidden lg:text-sm lg:flex items-center justify-between space-x-12">
               {navItems.map((item, index) => (
                  <li key={index} className="hover:text-turquo cursor-pointer">
                     <a
                        href={item.link}
                        className="flex items-center space-x-2">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-3 w-3 text-turquo"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fillRule="evenodd"
                              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span>{item.name}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}
export default NavBar
