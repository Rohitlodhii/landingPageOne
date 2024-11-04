/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import productImage from '@/app/assets/product-image.png'

import { animate, motion, ValueAnimationTransition } from 'framer-motion';
import { useMotionTemplate, useMotionValue } from 'framer-motion';


const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

type DotLottieType = {
  play: () => void;
};

const FeatureTab = (props : typeof tabs[number] & ComponentPropsWithoutRef<"div"> & {selected : boolean}) => {

  const tabRef = useRef<HTMLDivElement>(null);



  const [dotLottie, setDotLottie] =useState<DotLottieType | null>(null);

  const dotLottieRefCallback = (dotLottie: DotLottieType | null) => {
    
    setDotLottie(dotLottie);
  };


  const xPercentage = useMotionValue(50);
  const yPercentage = useMotionValue(0);


  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}% ,black,transparent)`
  

  useEffect(() => {

    if(!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const {height , width} = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [ 0 , width/circumference  ,  (width+height) / circumference , (width*2 + height) / circumference , 1]

    const options: ValueAnimationTransition= {
      times ,
      duration : 8 ,
      repeat : Infinity ,
       ease : 'linear' ,
       repeatType  :'loop',
    }

    animate(xPercentage , [0 , 100 , 100 ,0 , 0] , options);
    animate(yPercentage , [0 , 0 ,100 ,100 , 0] ,options);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [props.selected])

  const handleTabHover = () => {
    if(dotLottie){
      dotLottie.play();
    }
  }

  return (
    <div ref={tabRef} onClick={props.onClick} onMouseEnter={handleTabHover}  className='border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative'>


        {props.selected && (


        <motion.div 
          
          style={{
            maskImage,
          }}

        className='absolute inset-0 -m-px rounded-xl border border-[#A369FF] '></motion.div>



        )}
          
            <div  className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>
              <DotLottieReact 
                dotLottieRefCallback={dotLottieRefCallback}
                src={props.icon}
                className='h-5 w-5 '
                autoplay 
              />
              </div>
              <div className='font-medium'>{props.title}</div>
              {props.isNew && <div className='text-xs rounded-full px-2 py-0.5 bg-[#8C44FF] text-black font-semibold'>new</div>}
            </div>
  )
}

const Features = () => {

  const [selectedTab , setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);

  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;


  const handleSelectTab = (index : number) => {
    setSelectedTab(index);

    animate(backgroundSizeX ,
      [backgroundSizeX.get() , 100 , tabs[index].backgroundSizeX] ,
       {
      duration : 2 ,
      ease : "easeInOut",
    })
    animate(backgroundPositionX ,
      [backgroundPositionX.get() , 100 , tabs[index].backgroundPositionX] ,
       {
      duration : 2 ,
      ease : "easeInOut",
    })
    animate(backgroundPositionY ,
      [backgroundPositionY.get() , 100 , tabs[index].backgroundPositionY] ,
       {
      duration : 2 ,
      ease : "easeInOut",
    })

    

  }



  return (
    <section className='py-20 md:py-24'>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>Elevate your SEO efforts</h2>
        <p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat deleniti quas ipsa aliquid? Ipsam SEO.
        </p>

        <div className='mt-10 flex flex-col gap-3 lg:flex-row'>
       {
        tabs.map((tab , tabIndex)=>(
            <FeatureTab {...tab} selected={selectedTab === tabIndex}  onClick={()=> handleSelectTab(tabIndex)} key={tabIndex} />
        ))
       }
       </div>
       <div className='border border-white/20 p-2.5 rounded-xl mt-3'>



       <motion.div 



       
       className='aspect-video bg-cover border border-white/20 rounded-lg' style={{
       
        backgroundImage : `url(${productImage.src})`,
        backgroundPosition ,
        backgroundSize ,
       }}></motion.div>


       
       </div>
      </div>
    </section>
  )
}

export default Features
