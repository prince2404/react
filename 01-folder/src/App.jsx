import React from 'react'
import seriesList from './webSeries'
import Series from './components/Series'
import "./App.css";

const App = () => {
  return (
    <>
    <h1>List of Best Dramas</h1>
    <div className='card-container'>
      {seriesList.map(list => <Series 
      name = {list.name}
      id = {list.id}
      image_url = {list.img_url}
      rating = {list.rating}
      description = {list.description}
      cast = {list.cast}
      genre = {list.genre}
      watch_url = {list.watch_url} />
      )}
      
    </div>
    </>
  )
}

export default App

