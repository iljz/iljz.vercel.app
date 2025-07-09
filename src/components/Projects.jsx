import React from 'react'
import ProjectItem from './ProjectItem'
import FRFImg from '../assets/f0001.jpg'
import MLEImg from '../assets/MLE.png'
import VideoPanoramaStitch from '../assets/VideoPanoramaStitch.png'
import DFImg from '../assets/Domain Fusion.png'
import EduSage from '../assets/edusage.jpg'
import PantryTracker from '../assets/pantrytracker.jpg'
import GrubGuide from '../assets/uiucgrubguide.jpg'
import PoC from '../assets/pico_scholar.png'
// find more photos or maybe use youtube videos

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto lg:pl-4 md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center '>Projects</h1>
        <p className='text-center py-8'>
            Hover over for more info!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={PoC} title='PICO Scholar' skills_used={'Python, RAG, LlamaIndex, Docker, OpenVino'} description={'An application designed to automate and streamline the process of conducting systematic literature reviews, particularly in the field of biomedicine. The app leverages advanced AI technologies to assist researchers in efficiently managing and analyzing large volumes of scientific literature. '} link={'https://github.com/datagero/pico-scholar'}/>
            {/* <ProjectItem img={GrubGuide} title='GrubGuide UIUC' skills_used={'React, Python, RAG, Vercel, Yelp API'} description={'A chatbot designed to help UIUC students find food options. Contains a knowledge base of UIUC restaurants from Yelp API. Implements RAG using Pinecone vector database. Project link in Github README.'} link={'https://github.com/JiafengDu/grubguide-rag'}/> */}
            <ProjectItem img={DFImg} title='Image Compositing Tool' skills_used={'Python, OpenCV'} description={'A program that places an object from one image into another image and blends it in using gradient domain fusion'} link={'https://github.com/isaac-ljz/Gradient-Domain-Fusion/tree/main'}/>
            <ProjectItem img={FRFImg} title='Face Swap Filter' skills_used={'Python, Dlib, OpenCV'} description={'A face swap filter using facial detection that takes one video with one face and an image of another face'} link={'https://github.com/iljz/Video-Face-Replacement-App'}/>
            <ProjectItem img={VideoPanoramaStitch} title='Video Panorama Stitching' skills_used={'Python, OpenCV'} description={'A program that takes a panning video and creates a panorama accounting for perspective warping'} link={'https://github.com/isaac-ljz/Video-Panorama-Stitching'}/>
            {/* <ProjectItem img={EduSage} title='EduSage: AI Tutorbot' skills_used={'JavaScript, API, AWS'} description={'Tutor chatbot for students powered by Mistral AI API'} link={'https://github.com/iljz/EduSage-AI-Tutor-Bot'}/> */}
            {/* <ProjectItem img={PantryTracker} title='Pantry Tracker' skills_used={'JavaScript, Firebase, Vercel'} description={'Simple pantry tracker app with Google Firebase database integration'} link={'https://github.com/iljz/pantry-tracker'}/> */}
        </div> 
    </div>
  )
}

export default Projects