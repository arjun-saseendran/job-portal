import React from 'react'
import { FaRegImage, FaSuitcase } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'

export const PostBar = () => {
  return (
    <div className='md:w-[500px] h-32 border rounded-lg p-2'>
        <div className='flex items-center gap-2 px-4'>
            <img
          className="rounded-full w-12 h-12 "
          src='https://media.licdn.com/dms/image/v2/D5635AQEGAq4FamTp8g/profile-framedphoto-shrink_200_200/B56ZUzmS1pHQAc-/0/1740327431826?e=1751612400&v=beta&t=Mc9uQOFKy36vf7VhTcXF8BOqTMaj0aUtChX8f92Vbhg'
          alt='profile photo'
        />
        <div className='rounded-full border border-gray-400 p-2 w-full cursor-pointer hover:bg-gray-100'>
            <span className='ms-2'>Start Post</span>
        </div>
        </div>

        <div className='flex justify-around md:px-4 mt-4 '>
            <div className='flex items-center gap-2 cursor-pointer  hover:bg-gray-100 rounded-lg p-2'>
              <FaRegImage size={21} className='text-blue-500'/>  Media
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2'>
             <FaSuitcase size={21} className='text-purple-500'/>   Job
            </div>
            <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg p-2'>
             <HiOutlineDocumentText size={21} className='text-orange-700'/>   Write article
            </div>
        </div>

    </div>
  )
}
