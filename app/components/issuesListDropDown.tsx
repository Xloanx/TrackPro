import React from 'react'
import { DropdownMenu, Button } from '@radix-ui/themes'

const IssuesListDropDown = () => {
  return (
    <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Button variant="soft" size="2">
        Status
        <DropdownMenu.TriggerIcon />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content size="2">
      <DropdownMenu.Item>All</DropdownMenu.Item>
      <DropdownMenu.Item>OPEN</DropdownMenu.Item>
      <DropdownMenu.Item>IN-PROGRESS</DropdownMenu.Item>
      <DropdownMenu.Item>CLOSED</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  )
}

export default IssuesListDropDown