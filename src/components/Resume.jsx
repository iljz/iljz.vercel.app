import React from 'react';
import resumeImage from '../assets/Isaac Lo Resume.png'; // adjust the path according to your project structure
import resumePDF from '../assets/Isaac Lo Resume.pdf'; // PDF for download

const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 lg:pl-0 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center mb-4'>Resume</h1>
      <div className='flex justify-center mb-4'>
        <img src={resumeImage} alt="Isaac Lo's Resume" className='w-2/4 h-auto rounded-lg' />
      </div>
      <div className='flex justify-center'>
        <a
          href={resumePDF}
          download="Isaac Lo Resume.pdf"
          className='bg-gray-800 text-white px-4 py-2 rounded shadow-lg shadow-black hover:scale-105 ease-in duration-200'>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
