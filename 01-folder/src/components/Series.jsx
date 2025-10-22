import React from 'react'
import '../App.css'

const Series = (props) => {
  return (
    <div className='card'>
        <img src={props.image_url} height= "40%" width="50%"/>
        <h2>Name : {props.name}</h2>
        <p style={{fontWeight:"bold"}}>Rating : <span className={props.rating > 8.3 ? "good" : "bad"}>{props.rating}</span></p>
        <p>Description : {props.description}</p>
        <p>Cast : {props.cast}</p>
        <p>Genre : {props.genre}</p>
        <button><a href={props.watch_url}>Watch now</a></button>
    </div>
  )
}

export default Series
