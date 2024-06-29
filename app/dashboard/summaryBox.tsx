import React from 'react'

const SummaryBox = ({title, value}) => {
  return (
    <div className="border-solid border-2 rounded-lg w-40 h-24 font-sans">
        <div className='font-semibold mb-8'>{title}</div>
        <div className='font-bold text-center'>{value}</div>
    </div>
  )
}

export default SummaryBox