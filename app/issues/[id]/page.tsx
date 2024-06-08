
import React, {useState, useEffect} from 'react';
import prisma from '../../../prisma/client'
import axios from 'axios';
import { Text, Flex, Box, Badge, Select } from '@radix-ui/themes';
import EditButton from '@/app/components/editButton';
import DeleteButton from '@/app/components/deleteButton';
import NextPageButton from '@/app/components/nextPageButton';
import Link from 'next/link';
//import { useRouter } from 'next/navigation';


interface Issue {
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const IssueDetails = async ({params}) => {
  const {id} = params;



  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id, 10) },
  });



  return (
    <>
    <div className="flex justify-between items-center p-4">
      <div className="text-left">
      <h2 className="font-mono text-2xl font-bold py-10">
        Issue Details - Issue {id} 
        </h2>
      </div>
      <div className="text-right">
        {/* <Link href={`/issues/${nextId}`}>
          <NextPageButton handleNextId={handleNextId}/> 
        </Link> */}
      </div>
    </div>
        
        

      {!issue ?
      <Text weight="bold" size="4" as="div" color="red">"This Issue Id does not exist !!"</Text>:
        <div className="flex justify-between items-center p-4 space-x-96">
            <div className="text-left">
                <Box className="flex flex-col space-y-4 ...">
                <Text weight="bold" size="8" as="div">
                {issue.title}
                </Text>
                  <div className="flex space-x-4 ...">
                    <Badge color={issue.status === "OPEN" ? "orange":
                                  issue.status === "IN_PROGRESS" ? "blue":
                                  issue.status === "CLOSED" ? "green":""
                                  }> {issue.status}
                    </Badge>
                    <div> 
                    {new Date(issue.createdAt).toDateString()}
                    </div>
                  </div>
                  <div className="glass border-solid border-2 border-stone-300 rounded-lg">  
                    {issue.description} 
                  </div>

                </Box>
            </div>
            
            <div className="text-right items-start flex flex-col space-y-4">
              <div className='w-full max-w-40'>
                <Select.Root defaultValue="unassigned" radius="small">
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Assignment</Select.Label>
                      <Select.Item value="unassigned">Unassigned</Select.Item>
                      <Select.Item value="assigned">Assigned</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              </div>
              <div className='w-full max-w-40'>
                  <EditButton issueId={id}/>
              </div>
              <div className='w-full max-w-40'>
                <DeleteButton issueId={id}/>
              </div>
            </div>
        </div>
        }
       
    </>
  )
}

export default IssueDetails
