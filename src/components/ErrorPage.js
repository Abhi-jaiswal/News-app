import React from 'react'

const ErrorPage = () => {
  return (
    <div>
      {/* Error page showing up when there is an error in fetching news */}
      <div className='text-red-500 text-xl text-bold'> Error Occured while fetching headlines</div>
      <div> Please try again later</div>
    </div>
  )
}

export default ErrorPage
