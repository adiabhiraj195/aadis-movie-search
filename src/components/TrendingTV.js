import React, { useEffect, useState } from 'react';

export default function TrendingMovies() {
    const [data, setData] = useState({});
    const api = "64c6d39edb8c3a83236344139f4e39b8";
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM2ZDM5ZWRiOGMzYTgzMjM2MzQ0MTM5ZjRlMzliOCIsInN1YiI6IjY0OWEzOWFiZmVkNTk3MDE0ZDE0ZWIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xFg_B1ybzqvHw8h6cOLLJk-vscQvBwcgnTZcq0dH6Hs'
        }
      };

    const fetchdata = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options);
            const mData = await data.json();
            setData(mData);
            console.log(mData);
        } catch (err) {
            console.error(err);
        };
    }
    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <>
            {data.results?.map((e) => {
                return <>
                    <div className='movie-card' key={e.id}>
                        <div className='movie-img-cont'>
                            <img src={"https://image.tmdb.org/t/p/w500" + e.poster_path}></img>
                        </div>
                        <h4 className='movie-title'> {e.original_name}</h4>
                        <p className='release-date'>{e.first_air_date}</p>
                    </div>
                </>;
            })}
        </>
    )
}
