'use client'

import React, {useState} from 'react';
import { Flex, Text, Button, TextField, Callout } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import {z} from 'zod';

//define the types 
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {

//for programmatic navigation
const router = useRouter()  
const { register, control, handleSubmit, formState:{errors} } = useForm<NewIssueForm>({
  resolver: zodResolver(createIssueSchema)
});
const [error, setError] = useState("")


  return (
    <>
    <h2 className="font-mono text-2xl font-bold py-10">
        Create New Issue
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
      
      <form 
          className='space-y-3'
          onSubmit={handleSubmit(async (data) => {
                                                  try {
                                                    const res = await axios.post('/api/issues', data)   //post to api
                                                    
                                                    router.push('/issues')                  // redirect to issues page
                                                    res.status === 201 ? 
                                                    toast.success("Issue submitted successfully",{autoClose:false}) :  
                                                    toast.error("Something went wrong",{autoClose:8000})  //toast message
                                                  } 
                                                  catch (error) {
                                                    setError("An unexpected Error Occured")
                                                  }
                                                  })}>
        <Flex direction="column" gap="2">
              <TextField.Root placeholder="Title" { ...register('title', { minLength:1 } )} />
              {errors.title && <Text color='red' as="p"> { errors.title.message } </Text> }
              <Controller 
              name = "description"
              control = {control}
              // rules={{ required: true }}
              render = {({ field }) => <SimpleMDE placeholder="Description of Issue…" {...field}/>}
              />
              {errors.description && <Text color='red' as="p"> { errors.description.message } </Text> }
              
              <div className="max-w-40">
              <Button radius="small" size='2' >Submit New Issue</Button>
              </div>
        </Flex>
      </form>
      <ToastContainer />
    </div>
  </>
  )
}

export default NewIssuePage