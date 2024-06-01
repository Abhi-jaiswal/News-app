import React from 'react'

const Footer = () => {
  return (
    // It is footer and it is also hard coded
    <div className='w-full'>
      <div className='text-white full bg-black flex flex-col justify-center p-6'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>News App</h1>
        </div>
        <div className='flex items-center justify-between'>
            <div>
                <p>support</p>
                <p className='text-blue-500'>
                    Contact
                </p> 
                <p className='text-blue-500'>
                    Help center
                </p>             
                <p className='text-blue-500'>
                    Feedback
                </p>
            </div>
            <div>
                <p>
                Privacy & data
                </p>
                <p className='text-blue-500'>
                Cookies
                </p>
                <p className='text-blue-500'>
                Terms
                </p>
            </div>


        </div>

        <div className='bg-gray-500 h-0.5 w-full my-5'>

        </div>

        <div className='text-end'>
            <p>© 2022 News App. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
