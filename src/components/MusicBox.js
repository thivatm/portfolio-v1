import React, { useEffect, useState } from 'react'
import ReactSound from 'react-sound'

function MusicBox({ pageLoaded }) {
   const [state, setState] = useState(ReactSound.status.PLAYING)
   const [position, setPosition] = useState(23500)

   const controlSound = (soundState) => {
      if (soundState === ReactSound.status.STOPPED) {
         setPosition(23500)
      }
      setState(soundState)
   }

   const onPause = (props) => {
      setPosition(props.position)
   }

   useEffect(() => {
      setState(ReactSound.status.PLAYING)
   }, [pageLoaded])

   return (
      <div className="flex items-center justify-between space-x-1 p-1 border border-magnolia w-full opacity-50 hover:opacity-100">
         <div>
            <img
               className="w-12 h-12 object-cover"
               src="https://cdn.dribbble.com/users/6053169/screenshots/14214916/media/d35c8d85cc55fa2bdcd3acb511f990c7.png"
               alt="album_art"
            />
         </div>
         <div className="flex items-center justify-center px-1">
            <div className="hover:opacity-75">
               {state === ReactSound.status.STOPPED ||
               state === ReactSound.status.PAUSED ? (
                  <svg
                     onClick={() => controlSound(ReactSound.status.PLAYING)}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-8 w-8 text-white"
                     viewBox="0 0 20 20"
                     fill="currentColor">
                     <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                     />
                  </svg>
               ) : (
                  <svg
                     onClick={() => controlSound(ReactSound.status.PAUSED)}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-8 w-8 text-white"
                     viewBox="0 0 20 20"
                     fill="currentColor">
                     <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                     />
                  </svg>
               )}
            </div>

            {/* <div
               className="hover:opacity-75"
               onClick={() => controlSound(ReactSound.status.STOPPED)}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                     fillRule="evenodd"
                     d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                     clipRule="evenodd"
                  />
               </svg>
            </div> */}
         </div>
         <ReactSound
            url="a4qxs8zqv.mp3"
            loop={true}
            playFromPosition={position}
            playStatus={state}
            onPause={onPause}
         />
      </div>
   )
}

export default MusicBox
