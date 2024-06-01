import React from 'react'
import Card from './Card'

const News = ({news}) => {
  return (
    <div>
        <div className='flex flex-col gap-5'>
            {
                //extracting headline news article from the news array
                news.map((articles,index) => {
                    {
                        //not including removed articles
                        if(!(articles.title==="[Removed]")){
                            return (
                                <div key={index}>
                                    {/* Here we are passing articles to the card component, which is a reusable component */}
                                    <Card articles={articles}/>
                                </div>
                            )
                        }
                    }
                })
            }
        </div>
    </div>
  )
}

export default News;
