'use client'


import React, {useState, useEffect} from 'react';
import { Flex, Button, Text, Strong } from '@radix-ui/themes';
import axios from 'axios';
import IssuesTable from '../components/issuesTable';
import IssuesStatusSelect from '../components/issuesStatusSelect';
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
  const [recordSize, setRecordSize] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);

  // const response = await fetch('/api/issues');
  // const issues = await response.json();

  useEffect(()=>{
    async function fetchIssues(){
      try {
        //const response = await axios.get('/api/issues');
        //setIssues(response.data);
        const response = await fetch('/api/issues', {next:{revalidate: 10}});
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

 const handleRecordSizeChange = (val) => {
  setRecordSize(parseInt(val));
};

const handlePageChange = (page) =>{
  console.log(`${page} is selected`)
  setSelectedPage(page)
}

const incrementPage= () =>{
  setSelectedPage(selectedPage+1)
}

const decrementPage= () =>{
  setSelectedPage(selectedPage-1)
}


  return (
    <>
    {
      issues.message === "Server Error" ? <Text as="p"> <Strong>This request returned a server error. Please contact the administrator.</Strong> </Text>:
      issues.length === 0 ? <Text as="p"> <Strong>No data available on the database.</Strong> </Text>:
      <>
    
    <h2 className="font-mono text-2xl font-bold ">
      Issues Listing
    </h2>
      
    <div className="flex justify-between items-center p-4">
      <div className="text-left">
        <IssuesStatusSelect 
            selectedStatus= {selectedStatus}
            handleStatusSelection = {handleStatusSelection}/>
      </div>

      <div className="text-right">
        <NewIssueButton />
      </div>
    </div>
    
    { issues.length === 0?
    "No issues data on the database":
      < IssuesTable 
        data={issues}
        handleDelete = {handleIssueDelete}
        recordSize = {recordSize}
        handleRecordSizeChange = {handleRecordSizeChange}
        selectedPage={selectedPage}
        handlePageChange={handlePageChange}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        />
}

<Flex justify="end">
  <Pagination 
    data={issues}
    recordSize = {recordSize}
    selectedPage={selectedPage}
    handlePageChange={handlePageChange}
    incrementPage={incrementPage}
    decrementPage={decrementPage}/>
</Flex>
</>
}
   </>
  )
}

export default IssuesPage