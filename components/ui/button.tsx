import React from 'react'

interface ButtonProps {
    children : React.ReactNode ;
}

const GlowButton : React.FC<ButtonProps> = ({children}) => {
  return (
    <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff]'>
        <div className='absolute inset-0'>
            <div className='border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
            <div className='border rounded-lg  absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
            <div className='rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset]'></div>
        </div>
        <span>{children}</span>
    </button>
  )
}

export default GlowButton
