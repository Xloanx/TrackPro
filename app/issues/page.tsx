'use client'


import React, {useState, useEffect} from 'react';
import { Flex, Button } from '@radix-ui/themes';
import axios from 'axios';
import IssuesTable from '../components/issuesTable';
import IssuesListDropDown from '../components/issuesListDropDown';
import NewIssueButton from '../components/newIssueButton';
import Pagination from '../components/pagination';
import LoadingRings from '../components/loadingRings';

const IssuesPage = () => {
  const [issues, setIssues] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState("")

  useEffect(()=>{
    async function fetchIssues(){
      try {
        //const data = await fetch('/api/issues');
        const response = await axios.get('/api/issues')
        //const issues = await data.json();
        setIssues(response.data);
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
    return (<div className="flex items-center justify-center min-h-screen">
            <LoadingRings />
          </div>)
  }

 const handleStatusSelection = (event) =>{
  setSelectedStatus(event.target.value)

 } 

 const handleIssueDelete = (id) =>{
  console.log(`delete issue ${id}`)
  const newIssues = issues.filter( issue => issue.id !== id);
  setIssues(newIssues);
 }

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
    <h2 className="font-mono text-2xl font-bold ">
      Issues Listing</h2>

    <div className="flex justify-between items-center p-4">
      <div className="text-left">
        <IssuesListDropDown 
            selectedStatus= {selectedStatus}
            handleStatusSelection = {handleStatusSelection}/>
      
      </div>
      <div className="text-right">
        <NewIssueButton />
      </div>
    </div>

    { issues?
      < IssuesTable 
        data={issues}
        handleDelete = {handleIssueDelete}/>:
        "No issues data on the the databse"}

    <Flex justify="end">
      <Pagination />
    </Flex>
    </>
  )
}

export default IssuesPage