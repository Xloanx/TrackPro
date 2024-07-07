'use client'

import React, {useState} from 'react';
import { useIssues } from '@/context/IssuesContext';
import { Select } from '@radix-ui/themes';


const RecordSizeSelect = ({dataSize }) => {

  const {recordSize, setRecordSize} = useIssues();
  
  const handleRecordSizeChange = (val) => {
    setRecordSize(parseInt(val));
  };

  return (
    <Select.Root defaultValue={recordSize} 
                  value={recordSize} 
                  onValueChange={handleRecordSizeChange}>
        <Select.Trigger variant="ghost" > 
            {recordSize ? `${recordSize} records per page` : 'Record Size'} 
        </Select.Trigger>
          <Select.Content>
            <Select.Item value={10}>10 records per page</Select.Item>
            <Select.Item value={25}>25 records per page</Select.Item>
            <Select.Item value={50}>50 records per page</Select.Item>
            <Select.Item value={dataSize}>All records</Select.Item>
          </Select.Content>
        </Select.Root>
  )
}

export default RecordSizeSelect