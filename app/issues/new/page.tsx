'use client'

import React from 'react';
import { Flex, Box, Button, TextArea, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';



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
    <div>
        New Issue Page
    </div>
      <form onSubmit={handleSubmit(async (data)=>{
                                                  await axios.post('/api/issues', data)   //post to api
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
              
              <Button size='2'>Submit Issue</Button>
          </Box>
        </Flex>
      </form>
  </>
  )
}

export default NewIssuePage