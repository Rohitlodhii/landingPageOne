import React from 'react'
import LogoIcon from '@/app/assets/logo.svg'
import MenuIcon from '@/app/assets/icon-menu.svg'
import GlowButton from './ui/button'




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


const Header = () => {
  return (
    <header className='py-4 border-b border-white/15 md:border-none '>
        <div className='container'>
            <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl  max-w-2xl mx-auto'>
                <div>
                    <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
                    <LogoIcon className="h-8 w-8" />
                    </div>
                </div>
                <div className='hidden md:block'>
                    <nav className='flex gap-8 text-sm'>
                       {navLinks.map((item , index)=>(
                        <a className='text-white/70 hover:text-white transition' key={index} href='item.href'>{item.title}</a>
                       ))}
                    </nav>
                </div>
                <div className='flex gap-4 items-center'>
                    <GlowButton>Join the Waitlist</GlowButton>
                    <MenuIcon className="md:hidden" />
                </div>
            </div>
            
        </div>
    </header>
    
  )
}

export default Header
