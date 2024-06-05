'use client'


import React, {useState, useEffect} from 'react';
import { Flex, Button } from '@radix-ui/themes';
import axios from 'axios';
import IssuesTable from '../components/issuesTable';
import IssuesListDropDown from '../components/issuesListDropDown';
import NewIssueButton from '../components/newIssueButton';
import Pagination from '../components/pagination';
import LoadingRings from '../components/loadingRings';


interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}


const IssuesPage = () => {
  const [issues, setIssues] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState("")

  // const response = await fetch('/api/issues');
  // const issues = await response.json();

  useEffect(()=>{
    async function fetchIssues(){
      try {
        const response = await axios.get('/api/issues')
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



  return (
    <>
    <h2 className="font-mono text-2xl font-bold ">
      Issues Listing</h2>
      
    <div className="flex justify-between items-center p-4">
      <div className="text-left">
        <IssuesListDropDown 
            selectedStatus= {selectedStatus}
            handleStatusSelection = {handleStatusSelection}/>
        {/* <IssuesListDropDown /> */}
      
      </div>
      <div className="text-right">
        <NewIssueButton />
      </div>
    </div>
    
    { issues.length === 0?
    "No issues data on the database":
      < IssuesTable 
        data={issues}
        handleDelete = {handleIssueDelete}/>
    }
   
    
    </>
  )
}

export default IssuesPage