import React from 'react'
import { Table, Badge, Text, Strong, Flex, Select } from '@radix-ui/themes'
import Link from 'next/link';
import _ from 'lodash';
import Pagination from './pagination';
import RecordSizeSelect from './recordSizeSelect';
import { Paginate } from '../utils/paginate';

interface Data {
  id: number,
  title: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
}

const IssuesTable = ({data, handleDelete, selectedRecordSize, handleRecordSizeChange, 
                      selectedPage, handlePageChange, incrementPage, decrementPage }) => {
  
  console.log(data.message)

  if (data.length>0){
    const reversedDataArray = data.slice().reverse();  //to be mapped to achieve LIFO
    const paginatedData = Paginate(reversedDataArray, selectedPage, selectedRecordSize)
    return [reversedDataArray, paginatedData]
  }
  

  


  return (
    <>
    <div className="flex justify-between items-center p-4">
      <div className="text-left">
        <Text as="p">Showing <Strong>{data.length}</Strong> items on the database.</Text>
      </div>
      <div className="text-right">
        <RecordSizeSelect 
              selectedRecordSize={selectedRecordSize}
              handleRecordSizeChange ={handleRecordSizeChange}/>  
      </div>
    </div>
    

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell><Text size="3">S/N</Text></Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell><Text size="3">Issue</Text></Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell><Text size="3">Status</Text></Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell><Text size="3">Created</Text></Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {paginatedData.map(d =>(
          <Table.Row key={d.id}>
            <Table.Cell className="font-sans text-base">{reversedDataArray.indexOf(d)+1}</Table.Cell>
            <Table.Cell className="font-sans text-base">
              <Link href={`/issues/${d.id}`}>
                {d.title}
              </Link>
            </Table.Cell>
            <Table.Cell className="font-sans text-base">
              <Badge 
                color={ d.status === "OPEN"         ? ("red")  : 
                        d.status === "IN_PROGRESS"  ?  ("blue") : 
                        d.status === "CLOSED"       ? ("green") :""
                      }>
                {d.status}
              </Badge>
            </Table.Cell>
            <Table.Cell className="font-sans text-base">{new Date(d.createdAt).toDateString()}</Table.Cell>
          </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
    </>
  )
}

export default IssuesTable