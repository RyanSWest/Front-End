import React , {useState, useEffect} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Restaraunt from './Restaraunt';


class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state ={
        restaraunts:[],
        search: ''
    }
}
updateSearch(e) {
    this.setState({search: e.target.value})
  }

  

  onChange = e => {
    this.setState({search: e.target.value})
  }

    
  componentDidMount(){

    axios.get('https://api.openbrewerydb.org/breweries')
    .then(res=>{ this.setState(()=> ({restaraunts:res.data}))
      console.log("RESTARAUNTS", this.state.restaraunts)
} )
.then(res => {
    console.log("NEWSTATE", this.state)
})
.catch(err=> console.log(err))
  }





  render(){
    let filteredPlaces = this.state.restaraunts.filter (
        (e)=> {
            return e.name.indexOf(this.state.search)!== -1;
        }
    );

    return(
      <div>
        <form  type = 'submit'> 
     <input 
     className = 'search'
     type ='search'
     placeholder = 'Search'
     value ={this.state.search}
     onChange ={this.onChange}
     
     
     
     
     />
      </form>
     <div className ='search-div'> 

{filteredPlaces.map((e)=> {
     return(
       <h2>{e.name}</h2>
     )
})}
</div>
      </div>
        
    )



  }
    
}

export default SearchBar;