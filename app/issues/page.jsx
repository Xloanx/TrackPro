'use client'


import React from 'react';
import { useIssues } from '@/context/IssuesContext';
import { Flex, Button, Text, Strong } from '@radix-ui/themes';
import IssuesTable from './issuesTable';
import IssuesStatusSelect from './issuesStatusSelect';
import NewIssueButton from './newIssueButton';
import Pagination from './pagination';
import LoadingRings from '../components/loadingRings';
import { Paginate } from '../utils/paginate';



const IssuesPage = () => {

  const { issues, isLoading, selectedPage, recordSize, filteredData, reversedDataArray, paginatedData } = useIssues();
  

  if (isLoading) {
    return (<div className="flex items-center justify-center min-h-screen">
            <LoadingRings />
          </div>)
  }






  return (
    <>
    {
      issues.message === "Server Error" ? <Text as="p"> <Strong>This request returned a server error. Please contact the administrator.</Strong> </Text>:
      issues.length === 0 ? <div> 
                              <Text as="p"> <Strong>No data available on the database.</Strong> </Text>
                              <div className="text-right">
                                  <NewIssueButton />
                              </div>
                            </div>:
      <>
    
    <h2 className="font-mono text-2xl font-bold ">
      Issues Listing
    </h2>
      
    <div className="flex justify-between items-center p-4">
      <div className="text-left">
        <IssuesStatusSelect />
      </div>

      <div className="text-right">
        <NewIssueButton />
      </div>
    </div>
    
    { issues.length === 0?
    "No issues data on the database":
      < IssuesTable />
}

<Flex justify="end">
  <Pagination />
</Flex>
</>
}
   </>
  )
}

export default IssuesPage