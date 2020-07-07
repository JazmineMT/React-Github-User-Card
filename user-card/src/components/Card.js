import React from 'react'
import CardInfo from './CardInfo'

class Card extends React.Component{
    constructor(props){
        super(props);
    }
     
   

    render(){
        return(
            <div>
               <CardInfo info={this.props.info}/> 
            </div>
        )
    }
}

export default Card;