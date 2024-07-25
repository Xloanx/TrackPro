'use client'
import React from 'react';
import { Select } from '@radix-ui/themes';

const Assignee = ({assignee, handleAssigneeChange, hookReg}) =>{
  return (
    <Select.Root 
        defaultValue={assignee} 
        value={assignee} 
        onValueChange={handleAssigneeChange}
        hookReg={hookReg}>
        <Select.Trigger placeholder="Assignee" />
        <Select.Content>
            <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="assignee">Assignee</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="grape" disabled>
                    Grape
                </Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <Select.Item value="carrot">Carrot</Select.Item>
                <Select.Item value="potato">Potato</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default Assignee