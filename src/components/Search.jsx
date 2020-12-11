import React, {Component} from 'react';
import API from "./API"
import Planet from './Planet';



class Search extends Component {
    state = {
        discoveryYear:"",
        discoveryMethod:"",
        hostName:"",
        discoveryFacility:"",
        // searchText:"",
        value:"",
        error:"",
        planets:[]
    }
    

    /*
     * TODO:
     * okay I'll work on it .. "posting this for reference later: but react needs a way to pass the this.state.selection to the appropriate state
     * -then java needs to have other search logic added"
     */

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
       
    }

    handleSelectChange = (event) => {
        this.setState({value: event.target.value})
    }

    validate=()=> {
        let searchError="";
        if(this.state.searchText === ""){
            searchError = "must provide search input"
            this.setState({error:searchError});
          return false;
        } 
       
        return true;
    }

    
    handleSubmit = (e) =>{
        e.preventDefault();

        const isValid = this.validate();
        
        if(isValid){

        API.post('/searchPlanets', {
            
            hostName:this.state.hostName,
            discoveryYear:this.state.discoveryYear,
            discoveryMethod:this.state.discoveryMethod,
            discoveryFacility:this.state.discoveryFacility
            
        })
        .then(res =>{
           let temp = res.data;
            this.setState({planets:temp});           
        }).catch(err => {
            console.log(err);
        })
    }
}

    render() {
        let planetDisplay = null;
        if(this.state.planets.length !== 0){
            planetDisplay = <Planet planets={this.state.planets}/>
        }
        return(
            <div className="search">
                Search componenet
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <select value={this.state.value} onChange={this.handleSelectChange}>
                            <option></option>
                            <option value="discoveryYear">discoveryYear</option>
                            <option value="discoveryMethod">discoveryMethod</option>
                            <option value="hostName">hostName</option>
                            <option value="discoveryFacility">discoveryFacility</option>
                        </select>
                        <input type="text" name="searchText" placeholder="search" value={this.state.searchText} onChange={this.handleChange}/>
                    </div>
                    <button>search button</button>
                </form>
        <div style={{color:"red"}}>{this.state.error}</div>
        
            {planetDisplay}
            </div>
        );
    }
}

export default Search;