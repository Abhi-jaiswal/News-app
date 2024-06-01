import axios from "axios";
import { useState,useEffect } from "react";


const useNews = () => {
    // Here we are using our custom hook useNews to feach headlines from news api
    // We are using environment variable for API key
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

    // We are using custom hook useState for state management and storing fetched data
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState('false');

    async function fetchData(){
        setLoading(true);
        try{
            // Here we are using axios to fetch data from news api
            const {data} = await axios.get(url);
            console.log(data);

            // Here we are checking if data is not empty and then setting it to news state
            if(data){
                setNews(data.articles);
            }
            if(!data){
                setNews([]);
            }
        }
        // Here we are handling error if there is any while fetching data
        catch(error){
            // Here we are setting empty array to news state in case of error, as we will handle it in Headlines component
            setNews([]);
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {news, loading, fetchData};

}

export default useNews;