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
                        <Select.Item value="OPEN">OPEN</Select.Item>
                        <Select.Item value="IN_PROGRESS">IN_PROGRESS</Select.Item>
                        <Select.Item value="RESOLVED">RESOLVED</Select.Item>
                        <Select.Item value="CLOSED">CLOSED</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
  )
}

export default IssueStatus