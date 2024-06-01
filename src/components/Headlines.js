import React from 'react'
import News from './News';
import Spinner from './Spinner';
import useNews from '../hooks/useNews';
import ErrorPage from './ErrorPage';
import { LuRefreshCcw } from "react-icons/lu";

const Headlines = () => {

    //Here we are using our custom hook useNews to feach headlines from news api
  const {news,loading,fetchData} = useNews();

  return (
    <div className='w-[30%] bg-slate-300 ml-5 p-3 rounded-xl'>
        {/* if the news array is empty then there must be some error Occured while fetching news so we will show error page */}
        {/* checking if news array is not empty, if it is empty then we will just show error page */}
        {
            news.length === 0 && <ErrorPage/>
        }
        {/* if it is not empty then we will show news */}
        {
            news.length>0 && <div className='overflow-y-auto h-full'>
              <div className='flex justify-between'>
                <h1 className="mt-[15px] text-xl underline uppercase font-bold">Top Headlines</h1>
                {/* button to refresh the news and get latest headlines */}
                <button 
                onClick={()=>fetchData()}>
                    <LuRefreshCcw />
                </button>
              </div>
                {
                    //checking if loading is true then show spinner else show news
                    //here we have created seperate News component that will increase readability of code
                    loading ? <Spinner/> : <News news={news}/>
                }
            </div>

        }

    </div>
  )
}

export default Headlines
