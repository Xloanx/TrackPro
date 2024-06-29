import React from 'react';
import { Badge, Separator } from '@radix-ui/themes';

const LatestIssuesBox = ({latestIssues}) => {
  return (
    <div className="border-solid border-2 rounded-lg size-full font-sans p-4">
        <div className='font-bold text-2xl mb-8'>Latest Issues</div>
        {latestIssues.map((issue) => (
            <>
                <div key={issue.id} className='m-2 font-sans'>
                    <p className='font-bold'>{issue.title}</p>
                    
                    <Badge 
                        color={ issue.status === "OPEN"         ? ("red")  : 
                                issue.status === "IN_PROGRESS"  ?  ("blue") : 
                                issue.status === "CLOSED"       ? ("green") :""
                                }>
                        <p className='font-semibold'>{issue.status}</p>
                        
                    </Badge>
                </div>
                <Separator orientation="horizontal" size="4" />
            </>
         ))}

    </div>
  )
}

export default LatestIssuesBox