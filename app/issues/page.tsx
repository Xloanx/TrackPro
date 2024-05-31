'use client'


import React, {useState, useEffect} from 'react';
import { Flex, Button } from '@radix-ui/themes';
import axios from 'axios';
import IssuesTable from '../components/issuesTable';
import IssuesListDropDown from '../components/issuesListDropDown';
import NewIssueButton from '../components/newIssueButton';

const IssuesPage = () => {
  const [issues, setIssues] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    async function fetchIssues(){
      try {
        //const data = await fetch('/api/issues');
        const response = await axios.get('/api/issues')
        //const issues = await data.json();
        setIssues(response);
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

  if (isLoading){
    return <h2>Loading...</h2>
  }

  console.log(issues);

  interface Issue {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }

  return (
    <>
    <div>Issues Page</div>

    <Flex justify="start" gap="9" >
      <IssuesListDropDown />

      <NewIssueButton />

    </Flex>

    < IssuesTable data={issues.data}/>
    </>
  )
}

export default IssuesPage