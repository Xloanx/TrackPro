import React from 'react'
import { Select } from '@radix-ui/themes'

const RecordSizeSelect = ({selectedRecordSize, handleRecordSizeChange}) => {
  return (
    <Select.Root defaultValue={10} value={selectedRecordSize} onValueChange={handleRecordSizeChange}>
        <Select.Trigger variant="ghost" > 
            {selectedRecordSize ? `${selectedRecordSize} records per page` : 'Record Size'} 
        </Select.Trigger>
          <Select.Content>
            <Select.Item value={10}>10 records per page</Select.Item>
            <Select.Item value={25}>25 records per page</Select.Item>
            <Select.Item value={50}>50 records per page</Select.Item>
          </Select.Content>
        </Select.Root>
  )
}

export default RecordSizeSelect