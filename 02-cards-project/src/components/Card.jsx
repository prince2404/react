import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className='card'>
        <div className="top">
          <img src= {props.logo}/>
          <button>Save <i class="fa-regular fa-bookmark"></i></button>
        </div>

        <div className="center">
          <h2>{props.company} <span> {props.datePosted}</span></h2>
          <h1>{props.title}</h1>
          <div>
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
      
    </>
  )
}

export default Card
