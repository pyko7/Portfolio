import React from 'react';

const ProjectContainer = ({ imageName, reverse }) => {
    return (
        <article className={`w-10/12 h-[350px] my-0 mx-auto flex gap-x-9 ${reverse ? "flex-row-reverse" : ""} md:w-full md:h-auto md:max-h-[450px] md:flex-col md:justify-center md:items-center md:gap-y-9 `}>

            <div className='w-1/2 h-full md:w-10/12 sm:min-w-[280px] '>
                <img src={imageName} className="w-full h-full object-cover md:max-h-[275px] sm:max-h-[175px]" />
            </div>
            
            <div className='w-1/2 h-full flex flex-col gap-y-5 text-2xl text-secondary md:w-full md:max-w-xl md:px-6 md:gap-y-8 md:text-justify sm:max-w-lg  sm:items-center'>
                <h3>Groupomania</h3>
                <p className='text-xl sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis deserunt quos quam aperiam illo. Pariatur deserunt assumenda soluta veritatis distinctio dolores impedit autem velit, eligendi quibusdam necessitatibus, magnam quia praesentium!</p>
            </div>

            <div className='w-full flex text-secondary md:max-w-xl md:px-6 md:justify-end md:gap-x-10 sm:justify-center'>
                <a href='#'>Link to github</a>
                <a href='#'>Link to website</a>
            </div>
        </article>
    );
};

export default ProjectContainer;