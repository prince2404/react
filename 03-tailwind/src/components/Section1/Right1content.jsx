import React from 'react'
import CustomerCards from './CustomerCards'
import customerData from './Customer'

const Right1content = () => {
  return (
    <div className='flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth'>
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
