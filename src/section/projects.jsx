import React, { useRef, useState } from 'react'
import Cursor from '../components/cursor'

const Projects = () => {
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [projects, setProjects] = useState(false);
  const projectsRef = useRef(null);
  const videoRefs = useRef([]);

  const handleMouseEnter = () => {
    setIsProjectsHovered(true);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };
  const handleMouseEnterProjects = (index) => {
    setProjects(true);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = () => {
    setIsProjectsHovered(false);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };
  const handleMouseLeaveProjects = (index) => {
    setProjects(false);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div>
      <div
        ref={projectsRef}
        className='bg-black rounded-t-[80px] z-50'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='text-white pt-32 pl-40 text-[120px]'>
          Featured
          <div className='flex items-center pt-sans-regular-italic font-light'>
            <span>
              <div className="w-60 h-40 rounded-full overflow-hidden relative">
                <video
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src="projects.mp4" type="video/mp4" />
                </video>
              </div>
            </span>Projects
          </div>
        </div>

        {/* video */}
        <div
          className='grid grid-cols-2 gap-14 items-center z-50'
        >

          <div>
            <div
              className='h-[600px] w-[480px] rounded-[38px] ml-40 overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(1)}
              onMouseLeave={() => handleMouseLeaveProjects(1)}
            >
              <video
                ref={(el) => (videoRefs.current[1] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project1.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 ml-40 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='pt-[600px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(2)}
              onMouseLeave={() => handleMouseLeaveProjects(2)}
            >
              <video
                ref={(el) => (videoRefs.current[2] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project2.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[1100px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] ml-40 overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(3)}
              onMouseLeave={() => handleMouseLeaveProjects(3)}
            >
              <video
                ref={(el) => (videoRefs.current[3] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project3.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 ml-40 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[500px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(4)}
              onMouseLeave={() => handleMouseLeaveProjects(4)}
            >
              <video
                ref={(el) => (videoRefs.current[4] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project4.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[1100px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] ml-40 overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(5)}
              onMouseLeave={() => handleMouseLeaveProjects(5)}
            >
              <video
                ref={(el) => (videoRefs.current[5] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project5.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 ml-40 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[500px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(6)}
              onMouseLeave={() => handleMouseLeaveProjects(6)}
            >
              <video
                ref={(el) => (videoRefs.current[6] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project6.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[1100px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] ml-40 overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(7)}
              onMouseLeave={() => handleMouseLeaveProjects(7)}
            >
              <video
                ref={(el) => (videoRefs.current[7] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project7.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 ml-40 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[500px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(8)}
              onMouseLeave={() => handleMouseLeaveProjects(8)}
            >
              <video
                ref={(el) => (videoRefs.current[8] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project8.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[800px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] ml-40 overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(9)}
              onMouseLeave={() => handleMouseLeaveProjects(9)}
            >
              <video
                ref={(el) => (videoRefs.current[9] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project9.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 ml-40 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <div className='-mt-[500px] -mb-[400px]'>
            <div
              className='h-[600px] w-[480px] rounded-[38px] overflow-hidden relative'
              onMouseEnter={() => handleMouseEnterProjects(10)}
              onMouseLeave={() => handleMouseLeaveProjects(10)}
            >
              <video
                ref={(el) => (videoRefs.current[10] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="project10.mp4" type="video/mp4" />
              </video>
            </div>
            <p className='h-[600px] w-[500px] text-white mt-8 text-[26px] font-medium pr-19'>
              <span className='font-semibold text-[30px]'>Punto Page -</span>
              The First Super-App in Latin America
            </p>
          </div>

          <Cursor projects={projects} projectText="explore" />
        </div>

      </div>
      <Cursor isProjectsHovered={isProjectsHovered} />
    </div>
  );
}

export default Projects