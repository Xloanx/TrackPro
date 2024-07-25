import React from 'react';
import Link from 'next/link';
import { Badge, Separator } from '@radix-ui/themes';
import Loading from './loading';

const LatestIssuesBox = ({issues}) => {

  const getLatestIssues = (array, count) => {
    return array
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, count);
};

const count = 15;
const latestIssues = getLatestIssues(issues, count);


  return (
    <div className="border-solid border-2 rounded-lg font-sans p-4" >
        <div className='font-bold text-2xl mb-8'>Latest Issues</div>
        { latestIssues.length === 0 ?
          <div className='font-bold text-center'> <Loading /> </div>:
          latestIssues.map((issue) => (
              <div key={issue.id}>
                  <div  className='m-2 font-sans'>
                      {/* <p className='font-bold'>{issue.title}</p> */}
                      <p className='font-bold'>
                        <Link href={`/issues/${issue.id}`}>
                        {issue.title}
                        </Link>                        
                      </p>
                      
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