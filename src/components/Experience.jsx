import React from 'react'
import ExpItem from './ExpItem'

const data = [
    {
        year: 'January 2025 - May 2026',
        title: 'Graduate Research Assistant',
        company: 'Design Intelligence Lab',
        details: 'Working on Multi Modal Response Generation and Scalability of Jill Watson: AI Virtual Teaching Assistant. Advised by Professor Ashok Goel.'
    },
    {
        year: 'May 2025 - August 2025',
        title: 'Software Engineer Intern',
        company: 'Stryker',
        details: 'Worked in Stryker Vocera Core Voice Team'
    },
    {
        year: 'October 2024 - February 2025',
        title: 'Full Stack Developer',
        company: 'Georgia Tech Aerospace Systems Design Lab (EIDE Team)',
        details:
        'Assisted EIDE Research Team with building web applications and data pipelines for IoT Sensor Data Visualization'
    },
    {
        year: "February - May 2024",
        title: 'Software Engineer Intern',
        company: 'Ace AI',
        details:
        'Built data annotation platform for Startup'
    },
    {
        year: "July - September 2024",
        title: 'Software Engineer Fellow',
        company: 'Headstarter AI',
        details:
        'Built AI Projects using React, Node.js, JavaScript, Python, Firebase, Clerk, and other technologies <br/> Learned about industry practices and technical skills from industry professionals'
    },
    {
        year: "June - August 2022",
        title: 'Project Engineer Intern',
        company: 'Balfour Beatty US',
        details:
        'Carried out essential duties for the electrification project of the Caltrain Corridor <br/> Developed Python scripts to automate directory file management and created a database for easy access to project files <br/>Carried out field tests to gather trackway data'
    }
]
const Experience = () => {
  return (
    <div id='experience' className='max-w-[1040px] m-auto md:pl-20 lg:pl-4 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center py-4'>
            Experience
        </h1>
        {data.map((item,idx)=> (
            <ExpItem key={idx} year={item.year} title={item.title} company={item.company} details={item.details}/>
        ))}
    </div>
  )
}

export default Experience