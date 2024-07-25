
import React from 'react';
import prisma from '../../../prisma/client'
import axios from 'axios';
import { Text, Flex, Box, Badge, Select } from '@radix-ui/themes';
import EditButton from '@/app/issues/[id]/editButton';
import DeleteButton from '@/app/issues/[id]/deleteButton';
import NextPageButton from '@/app/issues/[id]/nextPageButton';
import Link from 'next/link';
import Assignee from './assignee';
//import { useRouter } from 'next/navigation';



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
      <Text weight="bold" size="4" as="div" color="red">"Invalid ID !!"</Text>:
        <div className="flex justify-between items-center p-4 space-x-96">
            <div className="items-left w-5/6">
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
                      {new Date(issue.updatedAt).toDateString()}
                      </div>
                    </div>
                    <div className="glass border-solid border-2 border-stone-300 rounded-lg">  
                      {issue.description} 
                    </div>

                </Box>
            </div>
            
            <div className="items-right items-start w-1/6 md:w-32 flex flex-col space-y-4">
              <div className='w-full max-w-40'>
                <Assignee />
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
