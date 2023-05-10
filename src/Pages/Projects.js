import React, { useEffect, useState } from 'react';
import Project from './Project';
import '../components/Home/style.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='projectBody pb-20'>
            <div className='text-center text-white  py-16'>
                <h1 className='text-4xl lg:text-5xl mb-2 font1 font-bold text-pink-700'>Latest Projects</h1>
                <progress class="progress w-72 lg:w-96 "></progress>
            </div>
            <div className=' lg:max-screen grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-8 px-4'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;