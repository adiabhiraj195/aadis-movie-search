import React from 'react';
import { RxCross2 } from "react-icons/rx";
export default function SearchDropdown(props) {
    const { fetchedData, btnClick, setToggleDropdown } = props;
    const deActiveDropdown = () => {
        setToggleDropdown(false);
    }
    // console.log(fetchedData +"this is searchdropdown");
    return (
        <>
            <div className='burger-close' >
                <RxCross2 className='burger-icon' onClick={deActiveDropdown} />
            </div>
            <div className='search-dropdown'>
                {/* <div className='search-category'>
                    <h2 className='category-heading'>Category</h2>
                    <h3 className='category-movie'>Movies</h3>
                    <h3 className='category-TV'>Tv Shows</h3>
                </div> */}
                {/* <div className='container '> */}
                <div className='search-result-container'>
                    {
                        fetchedData.results?.map((e) => {
                            return (
                                <div className='result-card'>
                                    <a href='' className='search-img-container'> <img src={`https://image.tmdb.org/t/p/w500` + e.poster_path}></img></a>
                                    <div className='result-details'>
                                        <h2>{btnClick?e.original_title:e.original_name}</h2>
                                        <p className='search-release-date'>{btnClick ?e.release_date: e.first_air_date}</p>
                                        <p className='story-line'>{e.overview.substring(0, 150)}...</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
