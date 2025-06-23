import React from 'react'

const TextBox = ({ children = <><p className=" text-sm text-gray-500 font-bold">Benefits</p>
    <p className=" text-5xl font-medium">We’ve cracked the code.</p>
    <p className=" text-base text-gray-400 ">Area provides real insights, without the data overload.</p></>,
gap='gap-12'}) => {
    return (
        <div className={`flex flex-col  justify-left ${gap} my-12`}>
            <footer className='text-gray-300 border-b-2 mb-4'> </footer>
            {children}
        </div>
    )
}

export default TextBox