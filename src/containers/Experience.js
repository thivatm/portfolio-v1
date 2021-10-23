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
               'Write modern, performant, maintainable code for the Product Tracified',
               'Work with a variety of different languages, platforms and frameworks such as TypeScript, Angular, Ionic, Next and NodeJS',
               "Fix and maintain the codebase to support and fulfil the existing enterprise customers' change requests",
               'Work with Stellar to maintain the integrity of blockchain with Tracified Apps',
            ],
         },
         {
            title: 'Kaydoh',
            position: '',
            duration: 'Freelancer',
            theme: '#78209e',
            tech: ['Node JS', 'PostgreSQL', 'jQuery', 'Pug'],
            description: [
               'Maintain a modern web application which is a 3rd Evolution of a Sillicon Valley Startup which gives a real estate agent to protrude from their competitors.',
               "Implement new features while maintaining the applications' overall user experirnce",
            ],
         },
         {
            title: 'IFS',
            position: 'Intern',
            duration: 'July 2018 - July 2019',
            theme: '#8427e2',
            tech: ['C#', 'PLSQL'],
            description: [
               'Write business logics and convert the existing destop application to web application.',
               'Develop a solution/API for CRM component in IFS application to bridge the database of IFS application and Outlook Application.',
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
         <div className="lg:flex space-y-16 lg:space-y-0 items-start w-full">
            <ul className="font-fira flex items-center lg:block">
               {jobs.map((elem, index) => (
                  <li
                     key={index}
                     onClick={() => changeJob(index)}
                     className={`px-6 py-3 border-b-2 lg:border-b-0 lg:border-l-2 cursor-pointer ${
                        index === jobs.indexOf(selectedJob)
                           ? 'border-turquo'
                           : 'border-brand'
                     }`}>
                     {elem.title}
                  </li>
               ))}
            </ul>
            <div className="lg:px-12">
               <Job data={selectedJob} />
            </div>
         </div>
      </div>
   ) : null
}

export default Experience
