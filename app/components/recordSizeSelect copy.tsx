'use client'

import React from 'react'
import { Select } from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setRecordSize } from '@/redux/features/recordSize/recordSizeSlice';


const RecordSizeSelect = () => {

const recordSize = useSelector((state: RootState )=> state.recordSize.selectedRecordSize )
const dispatch = useDispatch();


  return (
    <Select.Root defaultValue={recordSize} value={recordSize} onValueChange={()=>dispatch(recordSize)}>
        <Select.Trigger variant="ghost" > 
            {recordSize ? `${recordSize} records per page` : 'Record Size'} 
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