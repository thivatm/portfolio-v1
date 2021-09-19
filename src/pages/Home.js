import AboutMe from 'containers/AboutMe'
import Contact from 'containers/Contact'
import Experience from 'containers/Experience'
import Projects from 'containers/Projects'
import Hero from 'containers/Hero'
import NavBar from 'containers/NavBar'
import Publications from 'containers/Publications'
import 'animate.css'
import { useEffect, useState } from 'react'
import MusicBox from 'components/MusicBox'

function Home() {
   const [pageLoaded, setPageLoaded] = useState(false)

   const callback = function (entries) {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp')
            entry.target.classList.remove('opacity-0')
         }
      })
   }

   useEffect(() => {
      window.addEventListener('scroll', () => setPageLoaded(true))
      const observer = new IntersectionObserver(callback)

      const targets = document.querySelectorAll('.animate__animated')
      targets.forEach(function (target) {
         target.classList.add('opacity-0')
         observer.observe(target)
      })
   }, [])

   return (
      <div className="relative">
         <NavBar />
         <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto font-inter">
               <Hero />
               <AboutMe />
               <Experience />
               <Projects />
               <Publications />
               <Contact />
            </div>
         </div>
         <div className="fixed right-5 bottom-5">
            {pageLoaded ? <MusicBox pageLoaded={pageLoaded} /> : null}
            {/* <MusicBox pageLoaded={pageLoaded} /> */}
         </div>
      </div>
   )
}

export default Home
