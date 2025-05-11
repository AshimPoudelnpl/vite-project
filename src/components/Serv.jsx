import React, { use, useState } from 'react';

const Serv = () => {
     const[services,useservices]=useState([
        {
            title: "Web Development",
            desc: " I build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React and Next.js. My approach combines clean design with solid backend integration, ensuring every site is both beautiful and functional.",
            icon: "fa-brands fa-aws",
        },
        {
            title: "Android Development",
            desc: "I specialize in developing Android apps using Java, Kotlin, and Android Studio, with integration of Firebase, REST APIs, and SQL databases. From UI design to backend connectivity, I build apps that are scalable, efficient, and tailored to user needs.",
            icon: "fa-solid fa-mobile",
        },
        {
            title: "Backend Development",
            desc: " I develop secure and efficient backend systems using technologies like Java, Node.js, and SQL databases. My expertise includes creating REST APIs, integrating with third-party services, and optimizing backend performance for scalability and speed.",
            icon: "fa-solid fa-server",
        }

    ])
    return (
        <>
        <div className="main-container py-16">
            <h1 className='text-5xl font-bold text-center underline'>My Services</h1>
             <div className="services-container space-x-5 px-10 flex mt-12">
                <div className=' cursor-pointer hover:bg-gray-100 bg-slate-100  p-5  text-center shadow-lg  rounded-xl service1 space-y-4'>
                <i class="text-5xl fa-brands fa-aws"></i>
                    <h1 className='text-4xl'> Web Development</h1>
                    <p>I build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like React and Next.js. My approach combines clean design with solid backend integration, ensuring every site is both beautiful and functional.</p>
                     <button className='px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg'>Check</button>
                </div>
                <div className=' cursor-pointer hover:bg-gray-100 bg-slate-100  p-5  text-centershadow-lg  rounded-xl service2 space-y-4'>
                <i class="text-5xl fa-solid fa-mobile"></i>
                <h1 className=' text-4xl'> Android Development</h1>
                    <p>I specialize in developing Android apps using Java, Kotlin, and Android Studio, with integration of Firebase, REST APIs, and SQL databases. From UI design to backend connectivity, I build apps that are scalable, efficient, and tailored to user needs.</p>
                     <button className='px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg'>Check</button>

                </div>
                <div className=' cursor-pointer hover:bg-gray-100 bg-slate-100  p-5  text-centershadow-lg  rounded-xl service3 space-y-4'>
                <i class="text-5xl fa-solid fa-server"></i>
                <h1 className='text-4xl'> Backend Development</h1>
                    <p>I develop secure and efficient backend systems using technologies like Java, Node.js, and SQL databases. My expertise includes creating REST APIs, integrating with third-party services, and optimizing backend performance for scalability and speed.</p>
                     <button className='px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg'>Check</button>

                </div>
             </div>
        </div>
        </>
    );
};

export default Serv;