'use client'

import React, {useState, useEffect} from 'react';
import { Flex, TextField } from '@radix-ui/themes';
import MdeEditor from './mdeEditor';
import Assignee from './assignee';
import IssueStatus from './issueStatus';
import Priority from './priority';
import EditButton from './editButton';



const IssueEdit = ({params}) =>{

    const { id } = params;
    const [assignee, setAssignee] = useState("assignee");
    const [issueStatus, setIssueStatus] = useState("issue status");
    const [priority, setPriority] = useState("priority");
    const [issue, setIssue] = useState({});


    const handleAssigneeChange = (e) =>{
        setAssignee(e);
    }

    const handleIssueStatusChange = (e) =>{
        setIssueStatus(e);
    }

    const handlePriorityChange = (e) =>{
        setPriority(e);
    }

    useEffect(()=>{
        async function fetchIssue(){
            try {
                const response = await fetch(`/api/issues/${id}`);
                const data = await response.json();
                // setAssignee(issue.assignee);
                // setIssueStatus(issue.issueStatus);
                // setPriority(issue.priority);
                console.log(data);
                setIssue(data);
                if (!issue) throw new Error('Failed to fetch issues');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchIssue()
    }, []);

    return(
        <>
        <div className="flex justify-between items-center p-4">
            {/* <form> */}
                <div className="text-left">
                    <Flex direction="column">
                        <h2 className="font-mono text-2xl font-bold py-10">
                            Issue Edit - Issue {id} 
                        </h2>
                        
                        <div className="max-w-xl space-y-3">
                            <form>
                                <TextField.Root 
                                    placeholder="Title" 
                                    value={issue.title}/>

                                <MdeEditor value={issue.description}/>

                                <div style={{ display: 'none' }}>
                                    <TextField.Root 
                                        placeholder={assignee || 'Assignee'} 
                                        value={assignee} />

                                    <TextField.Root 
                                        placeholder={issueStatus || 'Issue Status'} 
                                        value={issueStatus} />

                                    <TextField.Root 
                                        placeholder={priority || 'Priority'} 
                                        value={priority} />
                                </div>
                                <EditButton />
                            </form>
                        </div>
                    </Flex>
                </div>

                <div className="text-right self-start">
                    <Flex direction="column" className='max-w-32 space-y-3'>
                        <Assignee 
                            assignee={assignee} 
                            handleAssigneeChange={handleAssigneeChange}/>

                        <IssueStatus 
                            issueStatus={issueStatus} 
                            handleIssueStatusChange={handleIssueStatusChange}/>

                        <Priority 
                            priority={priority}
                            handlePriorityChange={handlePriorityChange}/>
                    </Flex>
                </div>
        </div>
            </>
    )
};

export default IssueEdit;