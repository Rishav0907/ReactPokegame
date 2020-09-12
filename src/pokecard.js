import React,{Component} from 'react';
import './pokecard.css'
const PokeAPI="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padtoThree=(number) => 
{
    if(number<=999)
    {
        let finalNum=`00${number}`
        return finalNum.slice(-3)
    }
}

class PokeCard extends Component{
    render(){
        let imgSrc=`${PokeAPI}${padtoThree(this.props.id)}.png`;
        return(
        <div className="PokeCard" alt={this.props.name}>
            <h1 className="Pokecard-title">{this.props.name}</h1>
            <img src={imgSrc} alt={this.props.name}/>
        <div className="Pokecard-data">Type:{this.props.type}</div>
        <div className="Pokecard-data">Exp:{this.props.exp}</div>
        </div>
        )
    }
}

export default PokeCard;