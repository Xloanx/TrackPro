import React from 'react';
import Loading from './loading';
import { Badge } from '@radix-ui/themes';

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
            <div className="stat-title">
            <Badge color="red">
                  <p className='font-semibold'>Open</p>                          
              </Badge>
            </div>
            {!openPercentage ? (<div className='font-bold text-center'> <Loading /> </div>): 
           
                      (
                        <>
                          <div className="stat-value"> {counts.OPEN} </div>
                          <div className="stat-desc"> 
                            {openPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                            {parseInt(openPercentage).toFixed(2)}% 
                          </div>
                        </>
                      )
            }
        </div>

        <div className="stat">
            <div className="stat-title">
              <Badge color="yellow">
                  <p className='font-semibold'>In Progress</p>                          
              </Badge>
            </div>
            {!inProgressPercentage ? (<div className='font-bold text-center'> <Loading /> </div>):
                                      (
                                        <>
                                          <div className="stat-value"> {counts.IN_PROGRESS} </div>
                                          <div className="stat-desc"> 
                                            {inProgressPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                                            {inProgressPercentage.toFixed(2)}% </div>
                                        </>
                                      )
            }
        </div>

        <div className="stat">
            <div className="stat-title">
              <Badge color="blue">
                  <p className='font-semibold'>Resolved</p>                          
              </Badge>
            </div>
            {!resolvedPercentage ? (<div className='font-bold text-center'> <Loading /> </div>):
                                    (
                                      <>
                                        <div className="stat-value"> {counts.RESOLVED} </div>
                                        <div className="stat-desc"> 
                                          {resolvedPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                                          {resolvedPercentage.toFixed(2)}%</div>
                                      </>
                                    )
          }
        </div>

        <div className="stat">
            <div className="stat-title">
              <Badge color="green">
                  <p className='font-semibold'>Closed</p>                          
              </Badge>
            </div>
            {!closedPercentage ? (<div className='font-bold text-center'> <Loading /> </div>):
                                  (
                                    <>
                                      <div className="stat-value"> {counts.CLOSED} </div>
                                      <div className="stat-desc"> 
                                        {closedPercentage > 50 ? <span>↗︎</span> : <span>↘︎</span>}
                                        {closedPercentage.toFixed(2)}%
                                      </div>
                                  </>
                                )
          }
        </div>
    </div>
  )
}

export default Stats