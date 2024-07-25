import React from 'react'
import { MdSkipNext } from "react-icons/md";
import { GrChapterNext } from "react-icons/gr";
import { Tooltip,  IconButton } from '@radix-ui/themes';
const NextPageButton = () => {
  return (
    <Tooltip content="Next Issue">
    <IconButton   radius="full" color="gray">
    <GrChapterNext/>
    </IconButton>
  </Tooltip>
    
  )
}

export default NextPageButton