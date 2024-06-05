import React, {useState} from 'react'
import { Select, Button, Badge } from '@radix-ui/themes'

const IssuesListDropDown = ({selectedStatus, handleStatusSelection}) => {

    const [selected, setSelected] = useState("status")

  return (
          <Select.Root defaultValue="all" >
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Label>Status</Select.Label>
                <Select.Item value="all">ALL</Select.Item>
                <Select.Item value="open">OPEN</Select.Item>
                <Select.Item value="in progress">IN PROGRESS</Select.Item>
                <Select.Item value="closed">CLOSED</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
  )
}

export default IssuesListDropDown