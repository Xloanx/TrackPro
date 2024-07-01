import React from 'react';
import Loading from './loading';

const SummaryBox = ({title, value}) => {
  return (
    <div className="border-solid border-2 rounded-lg w-32 h-24 pl-4 font-sans">
        <div className='font-semibold mb-8'>{title}</div>
        {!value ? <div className='font-bold text-center'> <Loading /> </div>: 
                <div className='font-bold text-center'>{value}</div>}
        
    </div>
  )
}

export default SummaryBox