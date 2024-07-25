import React from 'react';
import { Button,Spinner } from '@radix-ui/themes';


const EditButton = () => {
  return (
    <div className="max-w-48">
    <Button radius="small" size='2' >
        Edit Issue
        <Spinner loading>
        </Spinner>
    </Button> 
</div>
  )
}

export default EditButton