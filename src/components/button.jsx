import React from 'react'

const button = ({bg = 'bg-gray-200', hover='hover:bg-[#bbb]', text = 'Discover more', aligment='self-start', mt='mt-7'}) => {
  return (
      <button className={` rounded-full ${bg} ${hover} duration-300 hover:text-white cursor-pointer text-center ${aligment} ${mt} px-6 py-2 w-[160px] h-[50px]`}>
          <p className='text-xs font-bold'>{ text}</p> 
    </button>
  )
}

export default button