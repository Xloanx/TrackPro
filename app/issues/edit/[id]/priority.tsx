import React from 'react'
import { Select } from '@radix-ui/themes'

const Priority = ({priority, handlePriorityChange}) => {
  return (
    <Select.Root
        defaultValue={priority} 
        value={priority} 
        onValueChange={handlePriorityChange}>
                <Select.Trigger placeholder="Priority" />
                <Select.Content>
                    <Select.Group>
                        <Select.Item value="priority">Priority</Select.Item>
                        <Select.Item value="low">LOW</Select.Item>
                        <Select.Item value="medium">MEDIUM</Select.Item>
                        <Select.Item value="high">HIGH</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
  )
}

export default Priority