import React from 'react'

const CustomerCards = (props) => {
    const statusStyles = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-400 text-gray-900'
  };
  return (
    <div className='flex shrink-0 snap-start w-80 h-[420px] rounded-3xl overflow-hidden relative text-white'>
        <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: `url(${props.image})`}}>
            <div className='absolute inset-0 bg-opacity-40'></div>
        </div>

        <div className="relative h-full flex flex-col justify-between p-6">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-800">{props.number}</span>
        </div>

        <div className="space-y-4">
          <div className="text-white">
            <p className="text-base font-medium leading-snug">{props.title}</p>
            <p className="text-base font-medium leading-snug">{props.subtitle}</p>
          </div>

          <div className="inline-flex">
            <div className={`${statusStyles[props.statusColor]} px-6 py-2 rounded-full flex items-center gap-2`}>
              <span className="text-sm font-semibold">{props.status}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default CustomerCards
