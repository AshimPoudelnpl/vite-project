import React, { use } from 'react'
import { useState } from 'react'

export const Header = () => {
   const[brandName,setBrandName]= useState("Portfolio ");
    const[menuLinks,setmenuLinks]=useState([
    {
    title:"Home",
    link:"/home",
    id:'1',
    },
    {
      title:"About",
      link:"/about",
      id:'2',
    },
    {
      title:"Skills",
      link:"/skills",
      id:'3',
    },
    {
      title:"Portfolio",
      link:"/portfolio",
      id:'4',
    },
    {
      title:"Contact",
      link:"/contact",
      id:'5',
    }
    
    
   ]);
     const[actionButton,setActioneButton]=useState(
        {
            title:"Download CV",
            link:"/hire-me",
        }
     )
  return (
    <>
    <div className=" h-20 border main flex justify-between items-center px-16 bg-gray-200">
      <div>{/*brand logo*/} 
        <h1 className="text-2xl font-bold"> {brandName}</h1>
      </div>
      <div className="space-x-6">{/*menu details*/}
        {menuLinks.map((link)=>(
        <a key={link.id} href={link.link} className="hover:text-orange-600">
            {link.title}</a>
        ))}
        {/*<a href="/about" className="hover:text-orange-600">About</a>
        <a href="/skils"className="hover:text-orange-600">Skills</a>
        <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
        <a href="/Contact" className="hover:text-orange-600">Contact</a>
        */}
      </div>
      <div>
        {/*button*/}
        <a href={actionButton.link} className="px-4 py-2 bg-orange-600 rounded-full text-1xl">{actionButton.title}</a>
      </div>
    </div>
    </>
  )

};
export default Header;
