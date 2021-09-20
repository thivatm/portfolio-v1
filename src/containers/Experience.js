import Job from 'components/Job'
import React, { useEffect, useState } from 'react'

function Experience() {
   const [jobs, setJobs] = useState([])
   const [selectedJob, setSelectedJob] = useState()

   const changeJob = (index) => {
      setSelectedJob(jobs[index])
   }

   useEffect(() => {
      const jobsArr = [
         {
            title: 'Tracified',
            position: 'Software Engineer',
            duration: 'November 2020 - Present',
            tech: ['Angular', 'Next JS', 'Node JS', 'Ionic', 'MongoDB'],
            theme: '#28a745',
            description: [
               'Write modern, performant, maintainable code for a diverse array of client and internal projects',
               'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
            ],
         },
         {
            title: 'Kaydoh',
            position: '',
            duration: 'Freelancer',
            theme: '#78209e',
            tech: ['Node JS', 'jQuery'],
            description: [
               'Write modern, performant, maintainable code for a diverse array of client and internal projects',
               'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
            ],
         },
         {
            title: 'IFS',
            position: 'Intern',
            duration: 'July 2018 - July 2019',
            theme: '#8427e2',
            tech: ['C#', 'PLSQL'],
            description: [
               'Write modern, performant, maintainable code for a diverse array of client and internal projects',
               'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
               'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript',
            ],
         },
      ]
      setJobs(jobsArr)
      setSelectedJob(jobsArr[0])
   }, [])

   return selectedJob ? (
      <div
         id="experience"
         className="mb-64 mt-24 flex-col font-inter text-white animate__animated anim">
         <h3 className="font-fira text-2xl font-semibold text-white mb-8">
            <span className="text-turquo font-light">02.</span> Experience
         </h3>
         <div className="flex items-start">
            <ul className="font-fira">
               {jobs.map((elem, index) => (
                  <li
                     key={index}
                     onClick={() => changeJob(index)}
                     className={`px-6 py-3 border-l-2 cursor-pointer ${
                        index === jobs.indexOf(selectedJob)
                           ? 'border-turquo'
                           : 'border-brand'
                     }`}>
                     {elem.title}
                  </li>
               ))}
            </ul>
            <div>
               <Job data={selectedJob} />
            </div>
         </div>
      </div>
   ) : null
}

export default Experience
