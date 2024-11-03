import React from 'react'
import LogoImg from '@/app/assets/logo.svg'

import XSocial from '@/app/assets/social-x.svg'
import InstaSocial from '@/app/assets/social-instagram.svg'
import YTSocial from '@/app/assets/social-youtube.svg'



const navLinks = [
    {
        title : "Features" ,
        href : "/"
    },
    {
        title : "About" ,
        href : "/"
    },
    {
        title : "Pricings" ,
        href : "/"
    },
    {
        title : "Reviews" ,
        href : "/"
    },
]

const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15 '>
        <div className='container'>
        <div className='flex flex-col lg:flex-row lg:items-center md:items-center  gap-8'>
            <div className='flex gap-2 items-center lg:flex-1 '>
                <LogoImg className="h-6 w-6" />
                <div className='font-medium'>Shadshots landing page</div>
            </div>

            
                <nav className='flex flex-col lg:flex-row lg:gap-7 md:flex-row gap-5 lg:flex-1 lg:justify-center'>
                    {navLinks.map((item)=> (
                        <a href={item.href} className='text-white/70 hover:text-white text-xs md:text-sm transition' key={item.title}>{item.title}</a>
                    ))}
                </nav>
           

            <div className='flex gap-5 items-center lg:flex-1 lg:justify-end '>
                <XSocial className="text-white/40 hover:text-white transition"/>
                <InstaSocial className="text-white/40 hover:text-white transition"/>
                <YTSocial className="text-white/40 hover:text-white transition"/>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer
