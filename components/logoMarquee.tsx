/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import acmeLogo from '@/app/assets/logo-acme.png'
import apexlogo from '@/app/assets/logo-apex.png'
import celestialLogo from '@/app/assets/logo-celestial.png'
import quantumLogo from '@/app/assets/logo-quantum.png'
import pulseLogo from '@/app/assets/logo-pulse.png'
import echoLogo from '@/app/assets/logo-echo.png'


const logos = [acmeLogo , apexlogo , celestialLogo , quantumLogo , pulseLogo , echoLogo]


const LogoMarquee = () => {
  return (
    <section className='py-20 md:py-24'>
        <div className='container'> 
            <div className='flex items-center gap-5'>
                <div className='flex-1 md:flex-none'>
                <h2>Trusted by top innovative teams</h2>
                </div>
                <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                <div className='flex  flex-none gap-14'>
                    {logos.map((logo)=>(
                        <img src={logo.src} key={logo.src} className='h-6 w-auto' />
                    ))}
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoMarquee
