'use client'

import React, {useState} from 'react';
import { Flex, Box, Button, TextField, Callout } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

//define the types 
interface NewIssueForm {
  title: String;
  description: String;
}

const NewIssuePage = () => {

//for programmatic navigation
const router = useRouter()  
const { register, control, handleSubmit } = useForm<NewIssueForm>();
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
                                                    await axios.post('/api/issues', data)   //post to api
                                                    router.push('/issues')                  // redirect to issues page
                                                  } 
                                                  catch (error) {
                                                    setError("An unexpected Error Occured")
                                                  }
                                                  })}>
        <Flex direction="column" gap="2">
              <TextField.Root placeholder="Title" { ...register('title', { minLength:1 } )} />
              <Controller 
              name = "description"
              control = {control}
              // rules={{ required: true }}
              render = {({ field }) => <SimpleMDE placeholder="Description of Issue…" {...field}/>}
              />
              
              <div className="max-w-40">
              <Button radius="small" size='2' >Submit New Issue</Button>
              </div>
        </Flex>
      </form>
    </div>
  </>
  )
}

export default NewIssuePage