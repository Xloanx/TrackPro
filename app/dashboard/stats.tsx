import React from 'react';
import Loading from './loading';

const Stats = ({issues}) => {
  const statuses = ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"];

  const doStatusCount = (IssuesArray, statusArray) => {
      const statusCount = IssuesArray.reduce((acc, issue) => {
          acc[issue.status] = (acc[issue.status] || 0) + 1;
          return acc;
      }, {});
    
      return statusArray.reduce((acc, status) => {
                  acc[status] = statusCount[status] || 0;
                  return acc;
              }, {});
  };

  const counts = doStatusCount(issues, statuses);
  console.log(counts);
  const totalCount = Object.values(counts).reduce((sum, value) => sum + value, 0);
  const openPercentage = (counts.OPEN / totalCount) * 100;
  const inProgressPercentage = (counts.IN_PROGRESS / totalCount) * 100;
  const resolvedPercentage = (counts.RESOLVED / totalCount) * 100;
  const closedPercentage = (counts.CLOSED / totalCount) * 100;

  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow mb-8">
        <div className="stat">
            <div className="stat-title">Open</div>
            {!openPercentage ? (<div className='font-bold text-center'> <Loading /> </div>): 
           
                      (
                        <>
                          <div className="stat-value"> {counts.OPEN} </div>
                          <div className="stat-desc"> 
                            {openPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                            {parseInt(openPercentage)}% 
                          </div>
                        </>
                      )
            }
        </div>

        <div className="stat">
            <div className="stat-title">In Progress</div>
            {!inProgressPercentage ? (<div className='font-bold text-center'> <Loading /> </div>):
                                      (
                                        <>
                                          <div className="stat-value"> {counts.IN_PROGRESS} </div>
                                          <div className="stat-desc"> 
                                            {inProgressPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                                            {inProgressPercentage}% </div>
                                        </>
                                      )
            }
        </div>

        <div className="stat">
            <div className="stat-title">Resolved</div>
            {!resolvedPercentage ? (<div className='font-bold text-center'> <Loading /> </div>):
                                    (
                                      <>
                                        <div className="stat-value"> {counts.RESOLVED} </div>
                                        <div className="stat-desc"> 
                                          {resolvedPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                                          {resolvedPercentage}%</div>
                                      </>
                                    )
          }
        </div>

        <div className="stat">
            <div className="stat-title">Closed</div>
            {!closedPercentage ? (<div className='font-bold text-center'> <Loading /> </div>):
                                  (
                                    <>
                                      <div className="stat-value"> {counts.CLOSED} </div>
                                      <div className="stat-desc"> 
                                        {closedPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                                        {closedPercentage}%
                                      </div>
                                  </>
                                )
          }
        </div>
    </div>
  )
}

export default Stats