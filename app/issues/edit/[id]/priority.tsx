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
                        <Select.Item value="LOW">LOW</Select.Item>
                        <Select.Item value="MEDIUM">MEDIUM</Select.Item>
                        <Select.Item value="HIGH">HIGH</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
  )
}

export default Priority