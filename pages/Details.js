import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import axios from 'axios'; 
import MovieList from '../components/MovieList'
import { useRouter } from 'next/router';
import React, { useState,useEffect } from 'react';
import Link from 'next/link';

const Details =()=>{	
	const router = useRouter();
	let [result,setResult]=useState({});
	const query=router.query.id;


	const movieDetails=(result)=>{
		if(result.hasOwnProperty("Title")){
			return (
				<div>
				<div class="ui unstackable items">
				 	<div class="item">
				    <div class="image">
				 		<img alt={result.Title} key={result.imdbID} src={result.Poster} />
				    </div>
				    <div class="content">
				      <a style={{color:"red"}} class="header">{result.Title}</a>
				      <div class="meta">
				        <span>{result.Genre}</span>
				      </div>
				      <div class="header">{result.Actors}</div>
				      <div class="description">
				        <p>{result.Plot}</p>
				      </div>
				      <div class="extra">
				        IDMB rating: {result.imdbRating}
				      </div>
				    </div>
				  </div>
				  </div>
				 <div class="ui two statistics">
					  <div class="statistic">
					    <div class="value">
					      <h3>{result.Released}</h3>
					    </div>
					    <div class="label">
					      Released
					    </div>
					  </div>
					  <div class="statistic">
					    <div class="text value">
					      {result.Director}<br/>
					    </div>
					    <div class="label">
					      Director
					    </div>
					  </div>
					 
					  </div>
					
					
				</div>
			)
		}else if(result.hasOwnProperty("Error"))
				return <h1>Id not found</h1>
	return <h1>Loading...</h1>
}


useEffect(() => {
    if (query) {
      axios
        .get("http://www.omdbapi.com/?", {
          params: {
            apikey: "a2509b0f",
            i: query,
            plot: "full"
          }
        })
        .then(response => setResult(response.data));
    }
  }, [query]);


	

		return(
			<div className="ui container" style={{marginTop: '10px'}} >
				<Head>
					<title >OMDB</title>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/> 
				</Head>
				<div className="ui pointing menu">
				<Link href="/">
				  <a style={{color:'brown'}} className="active item">
				    Online Movie Database
			   	  </a>
			   	</Link>
			   	</div>
			
				{movieDetails(result)}
				{console.log(result)}
				
			</div>
		)
	
}

export default Details;
