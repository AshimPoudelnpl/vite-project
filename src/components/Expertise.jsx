import React, { memo } from 'react'
import bannerBackground from '../assets/banner_wallpaper.svg';
const Expertise = memo(() => {
  return (
    <>
    <div className=''>
        <h1 className='my-8 text-5xl font-bold underline text-center'>My Expertise </h1>
        {/*box section */}
        <div style={{
            backgroundImage: `url(${bannerBackground})`, 
            backgroundSize:'cover',
        }}
        className="box-container items-center flex py-16">
         <div className=' flex justify-center'>{/*text-container*/}
           <div className="w-2/3  text-center space-y-4">
           <h1 className='text-4xl font-bold'>I love these technologies </h1>
            <p> we are well-equipped to build end-to-end solutions, ensuring seamless user experiences across both web and mobile platforms while handling server-side operations for dynamic, efficient data management.</p>
           <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">Hire me</button>
           </div>
         </div>
         <div className='flex justify-center'> {/* skills container*/}
            <div className='flex justify-center h-2/3 space-x-3 space-y-3 flex-wrap'>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Core Java</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">J2EE</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Hibernate(ORM tool)</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Spring Framework</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Spring Boot Frameworl</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Javascript</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">React JS</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Tailwind CSS</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Bootstrap</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Python</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">AWS cloud</p>
            <p className="bg-gray-300 w-fit px-3 py-3 mt-2 rounded-full hover:bg-orange-500 cursor-pointer ">Deploying on cloud</p>
            </div>
           
         </div>

        </div>
    </div>
    </>
  )
})

export default Expertise