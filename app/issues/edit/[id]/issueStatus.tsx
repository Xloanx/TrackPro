import React from 'react';
import { Select } from '@radix-ui/themes';

const IssueStatus = ({issueStatus, handleIssueStatusChange}) => {
  return (
    <Select.Root
        defaultValue={issueStatus} 
        value={issueStatus} 
        onValueChange={handleIssueStatusChange}>
                <Select.Trigger placeholder="Status" />
                <Select.Content>
                    <Select.Group>
                        <Select.Item value="issue status">Status</Select.Item>
                        <Select.Item value="open">OPEN</Select.Item>
                        <Select.Item value="in_progress">IN_PROGRESS</Select.Item>
                        <Select.Item value="resolved">RESOLVED</Select.Item>
                        <Select.Item value="closed">CLOSED</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
  )
}

export default IssueStatus