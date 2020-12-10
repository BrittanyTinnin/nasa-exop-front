import React, {Component} from 'react';
import axios from 'axios';
import Planet from './Planet';

const initialState = {
    discoveryYear:"",
    discoveryMethod:"",
    hostName:"",
    discoveryFacility:"",
    searchText:"",
    selection:"",
    error:"",
    planets:[]
}
class Search extends Component {
    constructor(props){
        super(props)
        this.state=initialState;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
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
        console.log(this.validate())
        console.log(this.state)
        if(isValid){

        axios.get('http://localhost:8080/NASA/allPlanets')
        .then(res =>{
            console.log(res.data);
           let temp = res.data;
            console.log(temp);
            this.setState({planets:temp});
           
        }).catch(err => {
            console.log(err);
        })
    };
}

    render() {
        return(
            <div className="search">
                Search componenet
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <select name="selection" value={this.state.selection} onChange={this.handleChange}>
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
            <Planet
            planets={this.state.planets}
            />
            </div>
        );
    }
}

export default Search;