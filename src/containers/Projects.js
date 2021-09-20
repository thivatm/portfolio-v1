import Project from 'components/Project'
import React, { useEffect, useState } from 'react'

function Projects() {
   const [projects, setProjects] = useState([])

   useEffect(() => {
      setProjects([
         {
            title: 'RealSketch',
            technologies: ['Python', 'PyTorch', 'Flask'],
            description:
               'In my Final Year Research Project, there’s a discussion on how we can bridge the gap between the industrial designer and their production workflow to reduce the cost of the time they spend on prototyping. An image synthesizing technique to generate a photo-realistic image of a real-world object from a sketch has been introduced. Compared to the existing systems our system can generate images with more accuracy and more photo-realism.',
            link: 'https://ieeexplore.ieee.org/document/9213230',
            codeLink: 'https://ieeexplore.ieee.org/document/9213230',
         },
         {
            title: 'TrainBuddy',
            technologies: ['jQuery', 'ARjs', 'Sass', 'Firebase'],
            description:
               'TrainBuddy is a mobile web application which was implemented with a group effort as an assignment for Mobile User Experience. This application is a gamified app with an intetion of encouraging travellers to use the Train for them to commute in a specific country.',
            link: 'https://ieeexplore.ieee.org/document/9213230',
            codeLink: 'https://ieeexplore.ieee.org/document/9213230',
         },
      ])
   }, [])

   return (
      <div id="projects" className="h-screen font-inter text-white">
         <h3 className="font-fira text-2xl font-semibold text-white mb-8 animate__animated anim">
            <span className="text-turquo font-light">03.</span> Projects
         </h3>
         <div className="grid grid-cols-2 gap-4">
            {projects.map((project, index) => (
               <Project key={index} data={project} />
            ))}
         </div>
      </div>
   )
}

export default Projects
