import React from 'react'

function Button({ onClick, placeholder }) {
   return (
      <button
         className={`relative inset-0 outline-none font-fira text-white font-bold px-8 py-2 
                border-2 border-turquo shadow-button transition-all hover:bg-turquo hover:text-gray-800 
                hover:border-turquo active:shadow-none active:inset-1`}
         onClick={() => onClick()}>
         {placeholder}
      </button>
   )
}

export default Button
