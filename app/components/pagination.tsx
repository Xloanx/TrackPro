import React from 'react'

const Pagination = () => {
  return (
    <div className="join py-5">
        <button className="join-item btn btn-sm">«</button>
        <button className="join-item btn btn-sm" > 1</button>
        <button className="join-item btn btn-sm btn-active"> 2</button>
        <button className="join-item btn btn-sm"  >3</button>
        <button className="join-item btn btn-sm"  >4</button>
        <button className="join-item btn btn-sm"  >5</button>
        <button className="join-item btn btn-sm">»</button>
    </div>
  )
}

export default Pagination