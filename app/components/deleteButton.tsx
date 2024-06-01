import React from 'react'
import { Tooltip, IconButton } from "@radix-ui/themes"
import { MdDelete } from "react-icons/md";


const DeleteButton = ({handleDelete}) => {
  return (
    <Tooltip content="Delete">
        <IconButton radius="full" color="red"  >
        <MdDelete onClick={handleDelete}/>
        </IconButton>
    </Tooltip>
  )
}

export default DeleteButton