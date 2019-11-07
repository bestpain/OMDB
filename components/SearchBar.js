import React from 'react';
import Link from 'next/link';

class SearchBar extends React.Component{
	
	state={term:''};

	onFormSubmit=(event)=>{
		event.preventDefault();
		if(this.state.term!=='')
		{	
			//console.log(this.state.term)
			this.props.whenSubmit(this.state.term);
		}
	}

	render(){
		return (
			<div className="ui pointing menu">
				<Link href="/">
				  <a style={{color:'brown'}} className="active item">
				    Online Movie Database
			   	  </a>
			   	</Link>
			  <div className="right menu">
			    <div className="item">
			      
			      <form className="ui form" onSubmit={this.onFormSubmit}>
			      <div className="ui icon input focus">
			       <input type="text" value={this.state.term} placeholder="search any movie" 
			 		onChange={event=>this.setState({term: event.target.value})} />
			        <button className="ui button negative"><i className="search link icon"></i></button>
			          </div>
			       </form>
			    
			    </div>
			  </div>
			  </div>
		
			)
	}
}


export default SearchBar;