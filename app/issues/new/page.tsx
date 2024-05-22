import { Flex, Box, Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <>
    <div>
        New Issue Page
    </div>

    <Flex direction="column" gap="2">
        <Box maxWidth="400px" className='space-y-3'>
            <TextField.Root placeholder="Title" />
            <TextArea placeholder="Description of Issue…" />
            <Button size='2'>Submit Issue</Button>
        </Box>
    </Flex>
  </>
  )
}

export default NewIssuePage