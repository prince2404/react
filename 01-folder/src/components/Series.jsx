import React from 'react'

const Series = (props) => {
  return (
    <div>
        <img src={props.image_url} height= "40%" width="50%"/>
        <h2>Name : {props.name}</h2>
        <p>Rating : {props.rating}</p>
        <p>Description : {props.description}</p>
        <p>Cast : {props.cast}</p>
        <p>Genre : {props.genre}</p>
        <button><a href={props.watch_url}>Watch now</a></button>
    </div>
  )
}

export default Series
