'use client'

import React, {useState} from 'react';
import { Flex, Button, TextField, Callout, Spinner } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { createIssueSchema } from '@/app/validationSchemas';
import ErrorMessage from '@/app/components/errorMessage';

//define the types 
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {

//for programmatic navigation
const router = useRouter();
 
const { register, control, handleSubmit, formState:{errors} } = useForm<NewIssueForm>({
  resolver: zodResolver(createIssueSchema)
});
const [error, setError] = useState("")
const [isSubmitting, setSubmitting] = useState(false)

const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true)
      const res = await axios.post('/api/issues', data)   //post to api
      
      router.push('/issues')                  // redirect to issues page
      res.status === 201 ? 
      toast.success("Issue submitted successfully",{autoClose:12000}) :  
      toast.error("Something went wrong",{autoClose:12000})  //toast message
    } 
    catch (error) {
      setSubmitting(false);
      setError("An unexpected Error Occured");
    }
    })

  return (
    <>
    <h2 className="font-mono text-2xl font-bold py-8">
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
          onSubmit={onSubmit}>
        <Flex direction="column" gap="2">
              <TextField.Root placeholder="Title" { ...register('title', { minLength:1 } )} />
              <ErrorMessage> {errors.title?.message} </ErrorMessage>
              <Controller 
              name = "description"
              control = {control}
              // rules={{ required: true }}
              render = {({ field }) => <SimpleMDE placeholder="Description of Issue…" {...field}/>}
              />
              <ErrorMessage> {errors.description?.message} </ErrorMessage>

              <div className="max-w-48">
              <Button radius="small" size='2' disabled={isSubmitting}>
                Submit New Issue
                {
                  isSubmitting &&
                <Spinner loading>
                </Spinner>
                }
              </Button> 
              </div>
        </Flex>
      </form>
      <ToastContainer />
    </div>
  </>
  )
}

export default NewIssuePage