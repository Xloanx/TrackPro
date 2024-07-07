'use client'

import React, {useEffect, useState} from 'react';
import { Flex, Grid, Box } from '@radix-ui/themes';
import { useIssues } from '@/context/IssuesContext';
import SummaryBox from './summaryBox';
import IssuesChart from './issuesChart';
import LatestIssuesBox from './latestIssuesBox';
import PriorityChart from './priorityChart';
import Stats from './stats';
import IssueActionsChart from './issueActionsChart';

const Dashboard = () => {
    const {issues} = useIssues(); 
    // const [issues, setIssues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // useEffect(()=>{
    //     async function fetchIssues(){
    //       try {
    //         const response = await fetch('/api/issues');           
    //         setIssues (await response.json());
    //         setIsLoading(false);
    //         if (!issues) {
    //           setIsLoading(false);
    //           throw new Error('Failed to fetch issues');
    //         }
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setIsLoading(false);
    //       }
    //     }
    //     fetchIssues()
    //   }, []);





  return (
        // <div className="flex justify-between items-center ">
        <Flex gap="8">
          <div className="item-left self-start  w-2/3">
              <Stats issues={issues}/>
            
              <Flex gap="4" className="mb-8">
                <IssuesChart issues={issues}/>
                <PriorityChart issues={issues}/>
              </Flex>
              
              <IssueActionsChart issues={issues}/>
                
              

              
          </div>

            <div className="item-right self-start w-1/3">
              <LatestIssuesBox issues={issues}/>
            </div>
            </Flex>
        // </div>
        


  
  );
}

export default Dashboard