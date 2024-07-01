import React from 'react'

const Stats = ({counts}) => {
  const totalCount = Object.values(counts).reduce((sum, value) => sum + value, 0);
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow mb-8">
        <div className="stat">
            <div className="stat-title">Open</div>
            <div className="stat-value"> {counts.OPEN} </div>
            <div className="stat-desc"> 
              {(counts.OPEN/totalCount)*100 > 50 ? <span>↗︎</span> : <span>↘︎</span>}
              {(counts.OPEN/totalCount)*100}% 
            </div>
        </div>

        <div className="stat">
            <div className="stat-title">In Progress</div>
            <div className="stat-value"> {counts.IN_PROGRESS} </div>
            <div className="stat-desc"> 
              {(counts.IN_PROGRESS/totalCount)*100 > 50 ? <span>↗︎</span> : <span>↘︎</span>}
              {(counts.IN_PROGRESS/totalCount)*100}% </div>
        </div>

        <div className="stat">
            <div className="stat-title">Resolved</div>
            <div className="stat-value"> {counts.RESOLVED} </div>
            <div className="stat-desc"> 
              { (counts.RESOLVED/totalCount)*100 > 50 ? <span>↗︎</span> : <span>↘︎</span>}
              {(counts.RESOLVED/totalCount)*100}%</div>
        </div>

        <div className="stat">
            <div className="stat-title">Closed</div>
            <div className="stat-value"> {counts.CLOSED} </div>
            <div className="stat-desc"> 
              { (counts.CLOSED/totalCount)*100 > 50 ? <span>↗︎</span> : <span>↘︎</span>}
              {(counts.CLOSED/totalCount)*100}%
            </div>
        </div>
    </div>
  )
}

export default Stats