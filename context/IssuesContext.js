'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Paginate } from '@/app/utils/paginate';

const IssuesContext = createContext();

export const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);             //handling pre-loading interactivity
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("ALL"); //handling issues status
  const [recordSize, setRecordSize] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [filteredData, setFilteredData] =useState([]);
  const [reversedDataArray, setReversedDataArray] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('/api/issues');
        setIssues (await response.json());
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }finally {
        
      }
    }

    fetchIssues();
  }, []);


  useEffect(() =>{
    updateFilteredData();
  }, [issues, searchValue, selectedStatus]);


useEffect(() => {
 // Check if filteredData is an array before attempting to slice and reverse it
 if (Array.isArray(filteredData)) {
  const reversedArray = filteredData.slice().reverse();
  setReversedDataArray(reversedArray);
} else {
  // Handle cases where filteredData is not an array (e.g., null or undefined)
  setReversedDataArray([]); // Or handle with appropriate default value
}
}, [filteredData]);

useEffect(() => {
  setPaginatedData(Paginate(reversedDataArray, selectedPage, recordSize));
}, [reversedDataArray, selectedPage, recordSize]);


  
  const addIssue = async (issue) => {
    const newIssue = await fetch('/api/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issue),
    }).then(res => res.json());

    setIssues([...issues, newIssue]);
  };

  
  const deleteIssue = async (id) => {
    await fetch(`/api/issues/${id}`, { method: 'DELETE' });
    setIssues(issues.filter(issue => issue.id !== id));
  };

  const updateIssue = async (updatedIssue) => {
    const updated = await fetch(`/api/issues/${updatedIssue.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedIssue),
    }).then(res => res.json());

    setIssues(issues.map(issue => issue.id === updated.id ? updated : issue));
  };



  const updateFilteredData = () =>{
    let newIssuesData = issues;

     //Apply search filtering if searchterm is not empty
     if (searchValue.trim() !== "") {
      newIssuesData = newIssuesData.filter(issue => issue.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                                    issue.title.toLowerCase().includes(searchValue.toLowerCase()));
    }

      newIssuesData = selectedStatus === 'ALL'? 
                                        newIssuesData : 
                                        newIssuesData.filter(d => d.status === selectedStatus);

    setFilteredData(newIssuesData);
    // setReversedDataArray(filteredData.slice().reverse());  //to be mapped to achieve LIFO
    // setPaginatedData(Paginate(reversedDataArray, selectedPage, recordSize));
  }




  return (
    <IssuesContext.Provider value={{ issues, 
                                      addIssue, 
                                      deleteIssue, 
                                      updateIssue, 
                                      searchValue, setSearchValue,
                                      filteredData,
                                      isLoading,
                                      selectedStatus, setSelectedStatus,
                                      recordSize, setRecordSize,
                                      selectedPage, setSelectedPage,
                                      reversedDataArray,
                                      paginatedData}}>
      {children}
    </IssuesContext.Provider>
  );
};

export const useIssues = () => useContext(IssuesContext);
