import React from 'react'
import Card from './components/Card'
import jobs from './jobs'

const App = () => {
  return (
    <div className='parent'>
      {jobs.map(job => <Card
      id = {job.id}
      logo = {job.logo}
      company = {job.company}
      datePosted = {job.datePosted}
      title = {job.title}
      type = {job.type}
      level = {job.level}
      salary = {job.salary}
      location = {job.location}

      />
      )}
    </div>
  )
}

export default App
