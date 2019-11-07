import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import React from 'react';
import axios from 'axios'; 
import MovieList from '../components/MovieList'


class App extends React.Component{
	state={result:{}};

	 onSearchSubmit=(term)=>{
		axios.get(
			'http://www.omdbapi.com/?',
				{
					params:{
						apikey:'a2509b0f',
						s:term
					}	
				}).then(response=>

			this.setState({result:response.data})
			)
		}


		renderContent=()=>{
			if(this.state.result.Search!==undefined)
				return <MovieList result={this.state.result.Search}/>
			else if(this.state.result.Response)
				return <h1 style={{color:'red'}}>Details Not Found! Try different keyword.</h1>
			return <h1 style={{color:'green'}}>Enter a movie title to begin with!</h1>
		}

	render(){
		return(
			<div className="ui container" style={{marginTop: '10px'}} >
				<Head>
					<title >OMDB</title>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/> 
				</Head>


				<SearchBar whenSubmit={this.onSearchSubmit}/>
				
				{this.renderContent()}
			</div>
		)
	}	
}

export default App;
