import React from 'react'
import { Tooltip, IconButton, Button } from "@radix-ui/themes"
import { MdEdit } from "react-icons/md";


const EditButton = () => {
  return (
    <Tooltip content="Edit">
    {/* <IconButton radius="full" color="blue"  >
    < MdEdit/>
    </IconButton> */}
    <Button color="blue" radius="small" size="2">
    < MdEdit/> Edit Isue
    </Button>
  </Tooltip>
  )
}

export default EditButton