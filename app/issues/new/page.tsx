'use client'

import React from 'react';
import { Flex, Box, Button, TextArea, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';



const NewIssuePage = () => {

//for programmatic navigation
const router = useRouter()  

//define the types 
interface NewIssueForm {
  title: String;
  description: String;
}

const { register, control, handleSubmit } = useForm<NewIssueForm>();

  return (
    <>
    <h2 className="font-mono text-2xl font-bold py-10">
        Create New Issue
    </h2>
      <form onSubmit={handleSubmit(async (data)=>{
                                                  await axios.post('/api/issues', data)   //post to api
                                                  toast("Wow so easy!");
                                                  router.push('/issues')                  // redirect to issues page
                                                  })}>
        <Flex direction="column" gap="2">
          <Box maxWidth="450px" className='space-y-3'>
              <TextField.Root placeholder="Title" rules={{ required: true }} { ...register('title') } />
              <Controller 
              name = "description"
              control = {control}
              rules={{ required: true }}
              render = {({ field }) => <SimpleMDE placeholder="Description of Issue…" {...field}/>}
              />
              
              <Button radius="small" size='2'>Submit Issue</Button>
          </Box>
        </Flex>
      </form>
  </>
  )
}

export default NewIssuePage