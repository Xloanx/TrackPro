import React from 'react';
import { Select } from '@radix-ui/themes';

const Assignee = () => {
  return (
    <Select.Root defaultValue="unassigned" radius="small">
        <Select.Trigger />
        <Select.Content>
        <Select.Group>
            <Select.Label>Assignment</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            <Select.Item value="assigned">Assigned</Select.Item>
        </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default Assignee