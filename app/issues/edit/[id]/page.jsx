'use client'

import React, {useState, useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Flex, TextField, Callout, Spinner } from '@radix-ui/themes';
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { updateIssueSchema } from '@/app/validationSchemas';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import MdeEditor from './mdeEditor';
import Assignee from './assignee';
import IssueStatus from './issueStatus';
import Priority from './priority';
import EditButton from './editButton';
import ErrorMessage from '@/app/components/errorMessage';

//define the types 
// type IssueForm = z.infer<typeof updateIssueSchema>;

const IssueEdit = ({params}) =>{

    //for programmatic navigation
    const router = useRouter();

    const { id } = params;
    const [assignee, setAssignee] = useState("assignee");
    const [issueStatus, setIssueStatus] = useState("issue status");
    const [priority, setPriority] = useState("priority");
    const [issue, setIssue] = useState({});
    const [title, setTitle] = useState("")
    const [mdeValue, setMdeValue] = useState("");
    const [error, setError] = useState("")
    const [isSubmitting, setSubmitting] = useState(false)

    // const { register, control, handleSubmit, formState:{errors} } = useForm<UpdateIssueForm>({
    const { register, control, handleSubmit, formState:{errors} } = useForm({
        resolver: zodResolver(updateIssueSchema)
      });


    const handleAssigneeChange = (e) =>{
        setAssignee(e);
    }

    const handleIssueStatusChange = (e) =>{
        setIssueStatus(e);
    }

    const handlePriorityChange = (e) =>{
        setPriority(e);
    }

    const handleTitleChange = (e) =>{
        setTitle(e)
    }

    const onMdeValueChange = (value) => {
        setMdeValue(value);
      };

    const onSubmit = handleSubmit(async(data)=>{
        try {
            setSubmitting(true);
            const res = await axios.put(`api/issues/${id}`, data);
            router.push(`/issues/${id}`)                  // redirect to individual issue page
            res.status === 201 ? 
            toast.success("Issue updated successfully",{autoClose:12000}) :  
            toast.error("Something went wrong",{autoClose:12000})  //toast message
        } catch (error) {
            setSubmitting(false);
            setError("An unexpected Error Occured");
        }
    })


    useEffect(()=>{
        async function fetchIssue(){
            try {
                const response = await fetch(`/api/issues/${id}`);
                const data = await response.json();
                console.log(data);
                setAssignee(data.assignee);
                setIssueStatus(data.status);
                setPriority(data.priority);
                setTitle(data.title);
                console.log(data);
                setIssue(data);
                // if (!issue) throw new Error('Failed to fetch issues');
            } catch (error) {
                console.error('Error fetching data:', error);
                setError("An unexpected Error Occured");
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
                        
                        <div className="max-w-xl">
                        {
                            error && 
                            <Callout.Root color="red" className="mb-5">
                            <Callout.Text>
                            "An unexpected Error Occured"
                            </Callout.Text>
                        </Callout.Root>
                        }
                            <form className="space-y-3" onSubmit={onSubmit}>
                                <TextField.Root 
                                    placeholder="Title" 
                                    value={title}
                                    onChange={handleTitleChange}
                                    { ...register('title', { minLength:1 } )}
                                    />
                                <ErrorMessage> {errors.title?.message} </ErrorMessage>

                                <Controller 
                                    name = "description"
                                    control = {control}
                                    // rules={{ required: true }}
                                    render = {({ field }) => <SimpleMdeReact placeholder="Description of Issue…"
                                                                                onChange={onMdeValueChange}
                                                                            value={issue.description} 
                                                                            field = {...field}/>}
                                    />
                                <ErrorMessage> {errors.description?.message} </ErrorMessage>

                                
                                    <TextField.Root 
                                        placeholder={assignee || 'Assignee'} 
                                        value={assignee} />

                                    <TextField.Root 
                                        placeholder={issueStatus || 'Issue Status'} 
                                        value={issueStatus} />

                                    <TextField.Root 
                                        placeholder={priority || 'Priority'} 
                                        value={priority} />

                                <EditButton />
                            </form>
                        </div>
                    </Flex>
                </div>

                <div className="text-right self-start">
                    <Flex direction="column" className='max-w-32 space-y-3'>
                        <Assignee 
                            assignee={assignee} 
                            handleAssigneeChange={handleAssigneeChange}
                            hookReg = { ...register('assignee', { minLength:1 } )}/>
                            <ErrorMessage> {errors.assignee?.message} </ErrorMessage>

                        <IssueStatus 
                            issueStatus={issueStatus} 
                            handleIssueStatusChange={handleIssueStatusChange}
                            { ...register('status', { minLength:1 } )}/>
                            <ErrorMessage> {errors.status?.message} </ErrorMessage>

                        <Priority 
                            priority={priority}
                            handlePriorityChange={handlePriorityChange}
                            { ...register('priority', { minLength:1 } )}/>
                            <ErrorMessage> {errors.priority?.message} </ErrorMessage>
                    </Flex>
                    
                </div>
            
        </div>
        <ToastContainer />
            </>
    )
};

export default IssueEdit;