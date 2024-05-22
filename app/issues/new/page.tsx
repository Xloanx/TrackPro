'use client'

import React from 'react';
import { Flex, Box, Button, TextArea, TextField } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";



const NewIssuePage = () => {
  return (
    <>
    <div>
        New Issue Page
    </div>

    <Flex direction="column" gap="2">
        <Box maxWidth="450px" className='space-y-3'>
            <TextField.Root placeholder="Title" />
            <SimpleMDE placeholder="Description of Issue…" />
            <Button size='2'>Submit Issue</Button>
        </Box>
    </Flex>
  </>
  )
}

export default NewIssuePage