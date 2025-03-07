import React from 'react'

function Navbar() {
  return (
    <div className='flex m-5 gap-x-1 justify-center '>
      <div className='basis-1/4 text-center  border-solid border-2 rounded-lg p-2 cursor-pointer bg-sky-500 hover:bg-sky-700 md:border-blue-500 xl:border-red-500'> Home</div>
      <div className='basis-1/4 text-center border-none border-2 rounded-lg p-2 cursor-pointer  bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 md:border-blue-500 xl:border-red-500'> About</div>

    </div>
  )
}

export default Navbar
