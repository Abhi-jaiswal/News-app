import React from 'react'

const Card = ({articles}) => {
  return (
    <div>
      {/* here we have the basic structure of card component */}
      <div className='rounded-lg border border-black flex flex-col items-center gap-y-5'>
        {/* image of the headline */}
        <div>
          <img src={articles?.urlToImage}/>
        </div>

        {/* heading and description */}
        <div className='text-center'>
          <h1 className='text-3xl text-bold'>{articles?.title}</h1>
          <p className='text-sm'>{articles?.description}</p>
        </div>

        {/* content of the article */}
        <div>
          <p>
            {articles?.content} ......
            <a href={articles?.url} className="text-blue-500"> read more</a>
          </p>
        </div>

        {/* source and date */}
        <div className='w-full flex justify-between'>
          <div >
            <p>Source : </p>
            <p>{articles?.source?.name}</p>
          </div>
          <div > 
            <p>Published At : </p>
            <p>{articles?.publishedAt}</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Card
