'use client'

import React, {useEffect, useState} from 'react';
import { Flex, Grid, Box } from '@radix-ui/themes';
import SummaryBox from './summaryBox';
import IssuesChart from './issuesChart';
import LatestIssuesBox from './latestIssuesBox';
import PriorityChart from './priorityChart';
import Stats from './stats';

const Dashboard = () => {
    const [issues, setIssues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const statuses = ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"];
    const priorities = ["LOW", "MEDIUM", "HIGH"];


    useEffect(()=>{
        async function fetchIssues(){
          try {
            const response = await fetch('/api/issues');           
            setIssues (await response.json());
            setIsLoading(false);
            if (!issues) {
              setIsLoading(false);
              throw new Error('Failed to fetch issues');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          }
        }
        fetchIssues()
      }, [])


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

const doPriorityCount = (IssuesArray, priorityArray) => {

  const priorityCount = IssuesArray.reduce((acc, issue) => {
    acc[issue.priority] = (acc[issue.priority] || 0) + 1;
    return acc;
}, {});

return priorityArray.reduce((acc, priority) => {
    acc[priority] = priorityCount[priority] || 0;
    return acc;
}, {});
};

const getLatestIssues = (array, count) => {
    return array
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, count);
};


console.log(doStatusCount(issues, statuses));


  return (
        <div className="flex justify-between items-center ">
          <div className="item-left self-start  max-w-full">
              <Stats counts={doStatusCount(issues, statuses)}/>
            
              <Flex gap="8">
                <IssuesChart statusesCounts={doStatusCount(issues, statuses)}/>
                <PriorityChart prioritiesCounts={ doPriorityCount(issues, priorities) }/>
              </Flex>

              
          </div>

            <div className="item-right self-start">
              <LatestIssuesBox latestIssues={getLatestIssues(issues, 15)}/>
            </div>
        </div>
        


  
  );
}

export default Dashboard