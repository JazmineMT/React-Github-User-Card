import React from 'react'
import gitHub from './github.png'
import email from './email.png'
import {Card, CardMedia , CardActionArea, FormHelperText}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Followers from './Followers'

const useStyles = makeStyles({
    div:{
        display:'flex',
        justifyContent: 'center',
    },
    root: { 
     maxWidth: 345,
     paddingLeft: 50,
    },
    media: {
      display:'flex',
      justifyContent: 'center',
      height: 140,
      width: 200,
      padding: '50px',
      margin: '20px',
      borderRadius: '50%',
    },
  })

const CardInfo = props =>{
    const classes = useStyles();

    // let followers = props.follower.map( e =>{
    //     console.log('working')
    // })
    
    console.log(props.info.location)

    return (
        <div className={classes.div}>

        
          <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.info.avatar_url}
                title='Profile'
                />
                <h1>{props.info.name}</h1>
                <h2> Username: {props.info.login}</h2>
                <h2> Bio: "{props.info.bio}"</h2>
                <h2> Location: {props.info.location}</h2>
                <h2> Followers: {props.info.followers}</h2>
                <a href={props.info.html_url}> <img src={gitHub}/></a>
                < a href={props.info.email}> <img src={email}/></a>
             </CardActionArea>
         </Card>
            
        
        </div>
    )
}

export default CardInfo;