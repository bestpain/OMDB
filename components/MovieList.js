import React from 'react';
import Link from 'next/link';


const MovieList=(props)=>{
	const movies=props.result.map((movie)=>{
		return (
			   
  				<div class="card">
            <Link href={`/Details?id=${movie.imdbID}`}>
              <a>
                <div class="image">
                  <img alt={movie.title} key={movie.imdbID} src={movie.Poster} />
                </div>
                <div className="content">
                  <div class="header">{movie.Title}</div>
                  <div class="meta">
                  {movie.Type}
                </div>  
              </div>
            <div class="extra content">
                <span class="right floated">
                  Released in {movie.Year}
                </span>
              </div>
            </a>
          </Link>
  			</div>
        
  		)
	})
	
	return (
		<div className="customContainer">
			<div class="ui link cards">
			{movies}
			</div>
		</div>
	)	
}

export default MovieList;