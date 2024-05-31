import React from 'react'
import { Tooltip, IconButton } from "@radix-ui/themes"
import { MdEdit } from "react-icons/md";


const EditButton = () => {
  return (
    <Tooltip content="Edit">
    <IconButton radius="full" color="blue"  >
    < MdEdit/>
    </IconButton>
  </Tooltip>
  )
}

export default EditButton