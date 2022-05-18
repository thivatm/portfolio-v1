import AboutMe from 'containers/AboutMe'
import Contact from 'containers/Contact'
import Experience from 'containers/Experience'
import Projects from 'containers/Projects'
import Hero from 'containers/Hero'
import NavBar from 'containers/NavBar'
import Publications from 'containers/Publications'
import 'animate.css'
import { useEffect } from 'react'
import SocialLinks from 'components/SocialLinks'
import Footer from 'containers/Footer'

function Home() {
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
      <div className="relative">
         <NavBar />
         <div className="max-w-7xl mx-auto">
            <div className="xl:max-w-5xl lg:max-w-4xl mx-auto font-inter px-8">
               {/* Components */}
               <Hero />
               <AboutMe />
               <Experience />
               <Projects />
               <Publications />
               <Contact />
               <Footer />
            </div>
         </div>
         <div className="hidden lg:block animate__animated animate__fadeInLeft fixed lg:left-8 xl:left-14 bottom-0">
            <SocialLinks isVertical={true} />
         </div>
      </div>
   )
}

export default Home
