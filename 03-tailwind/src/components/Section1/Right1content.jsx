import React from 'react'
import CustomerCards from './CustomerCards'
import customerData from './Customer'

const Right1content = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {customerData.map(card => <CustomerCards
      id = {card.id}
      number = {card.number}
      title = {card.title}
      subtitle = {card.subtitle}
      status = {card.status}
      statusColor = {card.statusColor}
      image = {card.image}
      />)}
      
    </div>
  )
}

export default Right1content
