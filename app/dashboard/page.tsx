'use client'

import React, {useEffect, useState} from 'react';
import { Flex, Box } from '@radix-ui/themes';
import SummaryBox from './summaryBox';
import Chart from './chart';
import LatestIssuesBox from './latestIssuesBox';

const Dashboard = () => {
    const [issues, setIssues] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function fetchIssues(){
          try {
            const response = await fetch('/api/issues');
            setIssues (await response.json());
            setIsLoading(false);
            if (!issues) {
              throw new Error('Failed to fetch issues');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchIssues()
      }, [])

console.log(issues);

const countStatus = (array, statusValue) => {
    return array.reduce((count, item) => {
        return item.status === statusValue ? count + 1 : count;
    }, 0);
};

const getLatestIssues = (array, count) => {
    return array
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, count);
};




  return (

    <Flex gap="8">
        
            <Flex direction="column" gap="4">
                <Flex gap="3">
                        <SummaryBox title="Open Issues"
                                    value={countStatus(issues, "OPEN")} />
                        
                        <SummaryBox title="In Progress Issues"
                                    value={countStatus(issues, "IN_PROGRESS")}/>

                        <SummaryBox title="Resolved Issues"
                                    value={countStatus(issues, "RESOLVED")}/>
                        
                        <SummaryBox title="Closed Issues"
                                    value={countStatus(issues, "CLOSED")}/>
                </Flex>

                <Chart />
            </Flex>
        

        
        <LatestIssuesBox latestIssues={getLatestIssues(issues, 15)}/>
        
    </Flex>
  )
}

export default Dashboard