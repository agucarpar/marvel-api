import React, { Component } from 'react'
import {endPoint} from "../../service/service"
import axios from "axios";
import Card from "../card/Card"



export default class SearchBox extends Component {
    constructor(){
        super()
        this.state={
            characterQuery:"",
            characters:[],
        }
        this.isSearching=false;
    }

    handlerQuery(e){
        let letters= e.target.value;
        this.setState({
            ...this.state,
            characterQuery:letters,          
        })

    }


    searchQuery(){
        this.isSearching=!this.isSearching;
        this.searchingCharacter(this.state.characterQuery)
    }



    searchingCharacter(query) {
    if(query!==""){
        axios.get(endPoint.apiUrl + query + endPoint.hash)
            .then(res=>{
                const response = res.data.data.results
                console.log(response)
                this.setState({
                    ...this.state,
                    characters:response
                })
            })
    }
}



    render() {
        return (
            <React.Fragment>
                <div className="wrapper-main"> 
                    <div>
                        <input type="search" onChange={(e)=>this.handlerQuery(e)} ></input>
                        <button  onClick={()=>{this.searchQuery()}}>Search</button> 
                    </div>
                   
                    {this.isSearching
                    ?
                        <div className="cards-section-wrapper">
                            {this.state.characters.map((character, index)=>{
                            return <Card character={character} index={index}/>
                            })}
                        </div>
                    :
                        <div className="no-search-wrapper">
                            <img src="colage.jpg" alt="marvel-colage" />
                            <h1>MARVEL API APP</h1>
                            <p>Find here more information about your favourite characters</p>
                        </div>
                    }
                    
                   
                </div>
            </React.Fragment>
        )
    }
}
