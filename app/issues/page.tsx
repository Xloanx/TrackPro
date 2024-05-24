'use client'

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { Button } from "@radix-ui/themes"
//import axios from 'axios'
import { Table, Text } from '@radix-ui/themes'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const IssuesPage = () => {

  interface issue {
    id: String;
    title: String;
    description: String;
    status: String;
    createdAt: String;
    updatedAt: String;
  }

  // const response = await fetch('/api/issues');
  // const issues = await response.json();

  const [issues, setIssues] = useState([])

useEffect(() => {
        const fetchIssues = async () => {
          try {
            const response = await fetch('/api/issues');
            if (!response) {
              throw new Error('Failed to fetch Issues');
            }
            const data = await response.json()
            setIssues(data);
          } catch (error) {
            console.error('Error fetching Issues:', error);
          }
        };
    
        fetchIssues();
      }, []);

      console.log(issues)

      const handleEdit = (id: String) =>{
        console.log(`${id} was clicked for edit`)
      }
  
      const handleDelete = (id: String) =>{
        console.log(`${id} was clicked for delete`)
      }
  

      const renderUI = () =>{
        if(!issues) {
                   return(
                    <Text as="p" mb="5" size="3">
                      There are no issues to fetch from the database.
                    </Text>
                   )
        }else{
          return(
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Ttile</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Updated</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                  {
                  issues.map(issue=>(
                    <>
                    <Table.Row key={issue.id}>
                      <Table.RowHeaderCell>{issue.id}</Table.RowHeaderCell>
                      <Table.Cell>{issue.title}</Table.Cell>
                      <Table.Cell>{issue.description}</Table.Cell>
                      <Table.Cell>{issue.status}</Table.Cell>
                      <Table.Cell>{issue.createdAt}</Table.Cell>
                      <Table.Cell>{issue.updatedAt}</Table.Cell>
                      <Table.Cell> 
                        <Button 
                          color="cyan" 
                          variant="soft"
                          onClick={()=>handleEdit(issue.id)}>
                          < MdEdit/>
                        </Button>  
                      </Table.Cell>
                      <Table.Cell> 
                        <Button 
                          color="red" 
                          variant="soft"
                          onClick={()=>handleDelete(issue.id)}>
                          <MdDelete />
                        </Button>   
                      </Table.Cell>
                    </Table.Row>
                    </>
                ))}
              </Table.Body>
            </Table.Root>
    )
        }
    }


  return (
  <>
    <div>
      IssuesPage  
    </div>
    
    <div className="py-5">
    <Button >
      <Link href="/issues/new">
          Create New Issue
      </Link>
    </Button>
    </div>

    {renderUI()}
  </>
  )
}

export default IssuesPage
