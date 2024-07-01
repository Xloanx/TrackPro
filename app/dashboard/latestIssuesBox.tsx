import React from 'react';
import { Badge, Separator } from '@radix-ui/themes';
import Loading from './loading';

const LatestIssuesBox = ({latestIssues}) => {
  return (
    <div className="border-solid border-2 rounded-lg max-w-96 font-sans p-4">
        <div className='font-bold text-2xl mb-8'>Latest Issues</div>
        { latestIssues.length === 0 ?
          <div className='font-bold text-center'> <Loading /> </div>:
          latestIssues.map((issue) => (
              <div key={issue.id}>
                  <div  className='m-2 font-sans'>
                      <p className='font-bold'>{issue.title}</p>
                      
                      <Badge color={ issue.status === "OPEN"         ? ("red")  : 
                                  issue.status === "IN_PROGRESS"  ?  ("blue") : 
                                  issue.status === "CLOSED"       ? ("green") :""
                                  }>
                          <p className='font-semibold'>{issue.status}</p>
                          
                      </Badge>
                  </div>
                  <Separator orientation="horizontal" size="4" />
              </div>
          ))}

    </div>
  )
}

export default LatestIssuesBox