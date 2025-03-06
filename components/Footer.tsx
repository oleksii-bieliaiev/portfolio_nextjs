/* eslint-disable @next/next/no-img-element */

import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
        Let&apos;s <span className='text-purple'>get in </span> touch!
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Open to new opportunities and collaborations — let&apos;s connect!</p>
        <a href='mailto:o.bieliaiev@icloud.com'>
          <MagicButton 
            title="Send Email"
            icon={<FaLocationArrow/>}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024</p>
        <div className='flex items-center md:gap-3 gap-6'>
           {socialMedia.map((profile) => (
             <a key={profile.id} href={profile.link} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
               <img src={profile.img} alt='icon' width={20} height={20}/>
             </a>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
