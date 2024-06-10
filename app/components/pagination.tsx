import React from 'react'

const Pagination = ({data, recordSize, selectedPage, handlePageChange, incrementPage, decrementPage}) => {

//handling pagination logic
const dataCount = data.length;
const numOfPages = Math.ceil(dataCount/parseInt(recordSize))
const pages = _.range(1,numOfPages+1)




  return (
    <>
    { pages.length === 1? "" :  //if selected record size results in just a page, don't display pagination
    <div className="join py-5">
        <button 
            className={selectedPage===1?
              "join-item btn btn-sm btn-disabled" :
              "join-item btn btn-sm"}
            onClick={decrementPage}>«
        </button>

        {pages.map(page=>(
          <button 
            key={page} 
            className={selectedPage===page?"join-item btn btn-sm btn-active" :"join-item btn btn-sm"}
            onClick={()=>handlePageChange(page)}> {page}</button>
        ))}
         

        <button 
            className={selectedPage=== pages[pages.length - 1]?
              "join-item btn btn-sm btn-disabled" :
              "join-item btn btn-sm"}
            onClick={incrementPage}>»
        </button>
    </div>
      }
      </>
  )
}

export default Pagination