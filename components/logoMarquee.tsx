/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client"
import React from 'react'
import { motion } from 'framer-motion' 

import acmeLogo from '@/app/assets/logo-acme.png'
import apexlogo from '@/app/assets/logo-apex.png'
import celestialLogo from '@/app/assets/logo-celestial.png'
import quantumLogo from '@/app/assets/logo-quantum.png'
import pulseLogo from '@/app/assets/logo-pulse.png'
import echoLogo from '@/app/assets/logo-echo.png'


const logos = [acmeLogo , apexlogo , celestialLogo , quantumLogo , pulseLogo , echoLogo,acmeLogo , apexlogo , celestialLogo , quantumLogo , pulseLogo , echoLogo]


const LogoMarquee = () => {
  return (
    <section className='py-20 md:py-24'>
        <div className='container'> 
            <div className='flex items-center gap-5 flex-col md:flex-row'>
                <div className='flex-1 md:flex-none'>
                <h2 className='text-sm tracking-tighter'>Trusted by top innovative teams</h2>
                </div>
                <div className='max-w-xs md:max-w-none flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
                <motion.div
                
                initial={{translateX : '-50%'}}
                animate={{translateX : '0'}}

                transition={{
                    duration : 10 ,
                    repeat : Infinity ,
                    ease : "linear"
                }}

                className='flex  flex-none gap-14 pr-14 -translate-x-1/2'>
                    {logos.map((logo , index)=>(
                        <img src={logo.src} key={index} className='h-6 w-auto' />
                    ))}
                </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoMarquee
