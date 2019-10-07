import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="wrapper-card" key={this.props.index}>
                <img src={this.props.character.thumbnail.path + "/portrait_fantastic.jpg"} alt="character img" />
                <h1 key={this.props.index} >{this.props.character.name}</h1>
                <p>{this.props.character.description}</p>
                <ul>
                    {this.props.character.urls.map((url, idx)=>{
                        return <li key={idx}><a href={url.url} target="_blank" rel="noopener noreferrer">{url.type}</a></li>
                    })}
                </ul>
            </div>
        )
    }
}
