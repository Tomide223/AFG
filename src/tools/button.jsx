import React from 'react'

const button = ({bg = 'bg-gray-200', hover='bg-green-100', text = 'Discover more'}) => {
  return (
      <button className={`  px-6 py-2 rounded-full ${bg} hover:${hover} cursor-pointer text-center self-start mt-7 `}>
          <p className='text-xs font-bold'>{ text}</p> 
    </button>
  )
}

export default button