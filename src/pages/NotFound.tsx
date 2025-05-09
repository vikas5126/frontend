import React from 'react'
import { MdError } from 'react-icons/md'

const NotFound = () => {
  return (
    <div className='container flex justify-center items-center h-full'>
        <h1>page Not Found</h1>
        <MdError className='text-5xl'/>
    </div>
  )
}

export default NotFound