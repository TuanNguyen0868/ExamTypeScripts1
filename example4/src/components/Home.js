import { DatePicker } from 'antd'
import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Home.css'

export default function Home() {
    const [movies, setMovies] = useState([])
    const getMovieRequest = async ()=>{
       const url = "http://www.omdbapi.com/?s=avengers&apikey=f31e3469"
       
       const response = await fetch(url);
       const responseJson = await response.json()

       console.log(responseJson)
       setMovies(responseJson.Search);
    }
    useEffect(()=>{
        getMovieRequest();
    }, [])
    return (
        <section className="ss-movies">
            <div className="list-movie">
            {/* <DatePicker/> */}
            <MovieList movies={movies}/>
            </div>
        </section>
    )
}
