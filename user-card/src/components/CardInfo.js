import React from 'react'
import gitHub from './github.png'
import email from './email.png'

const CardInfo = props =>{
    console.log(props)
    return (
        <div>
            <img
            src={props.info.avatar_url}
            alt='thumbnail'
            />
            <h1>{props.info.name}</h1>
            <h2> Username: {props.info.login}</h2>
             <h2> Bio: "{props.info.bio}"</h2>
             <h2> Location: {props.info.location}</h2>
             <h2> Followers: {props.info.followers}</h2>
             <a href={props.info.html_url}> <img src={gitHub}/></a>
             < a href={props.info.email}> <img src={email}/></a>
        </div>
    )
}

export default CardInfo;