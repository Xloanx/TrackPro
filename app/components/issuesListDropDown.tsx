import React, {useState} from 'react'
import { DropdownMenu, Button, Badge } from '@radix-ui/themes'

const IssuesListDropDown = ({selectedStatus, handleStatusSelection}) => {

    const [selected, setSelected] = useState("status")

  return (
  //   <DropdownMenu.Root>
  //   <DropdownMenu.Trigger>
  //     <Button color="gray" variant="soft" size="2">
  //       Status
  //       <DropdownMenu.TriggerIcon />
  //     </Button>
  //   </DropdownMenu.Trigger>
  //   <DropdownMenu.Content size="2">
  //     <DropdownMenu.Item>All</DropdownMenu.Item>
  //     <DropdownMenu.Item><Badge color="orange">OPEN</Badge></DropdownMenu.Item>
  //     <DropdownMenu.Item><Badge color="blue">IN-PROGRESS</Badge></DropdownMenu.Item>
  //     <DropdownMenu.Item><Badge color="green">CLOSED</Badge></DropdownMenu.Item>
  //   </DropdownMenu.Content>
  // </DropdownMenu.Root>

  <select 
      className="select select-bordered select-sm w-full max-w-32" 
      value={selectedStatus} 
      onChange={handleStatusSelection}>
    <option value="" selected>All</option>
    <option value="open"><Badge color="orange">OPEN</Badge></option>
    <option value="in progress"><Badge color="blue">IN PROGRESS</Badge></option>
    <option value="closed"><Badge color="green">CLOSED</Badge></option>
  </select>
  )
}

export default IssuesListDropDown