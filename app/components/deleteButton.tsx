import React from 'react'
import { Tooltip, IconButton, Button } from "@radix-ui/themes"
import { MdDelete } from "react-icons/md";


const DeleteButton = ({handleDelete}) => {
  return (
    <Tooltip content="Delete">
        {/* <IconButton radius="full" color="red"  >
        <MdDelete onClick={handleDelete}/>
        </IconButton> */}
        <Button color="red" radius="small" size="2" onClick={handleDelete}>
        Delete Issue
        </Button>
    </Tooltip>
  )
}

export default DeleteButton