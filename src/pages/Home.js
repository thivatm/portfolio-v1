import AboutMe from 'containers/AboutMe'
import Contact from 'containers/Contact'
import Experience from 'containers/Experience'
import Projects from 'containers/Projects'
import Hero from 'containers/Hero'
import NavBar from 'containers/NavBar'
import Publications from 'containers/Publications'

function Home() {
   return (
      <div>
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
      </div>
   )
}

export default Home
