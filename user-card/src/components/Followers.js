import React from 'react'
import FollowersCard from './FollowersCard'

const Followers = props =>{
    console.log(props)
    return(
        <div className= 'follow'>
            {props.followers.map(followers =>{
                return <FollowersCard key = {followers.id} followers ={followers}/>
            })}

        </div>
    )
}

export default Followers;