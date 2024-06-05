import React from 'react'
import { Table, Badge, Text, Strong, Flex } from '@radix-ui/themes'
import EditButton from './editButton';
import DeleteButton from './deleteButton';
import Link from 'next/link';
import Pagination from './pagination';

interface Data {
  id: number,
  title: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
}

const IssuesTable = ({data, handleDelete}) => {
  return (
    <>
    <Text as="p">Showing <Strong>{data.length}</Strong> items on the database.</Text>
    <Table.Root>
  <Table.Header>
    <Table.Row>
    <Table.ColumnHeaderCell><Text size="3">S/N</Text></Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell><Text size="3">Issue</Text></Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell><Text size="3">Status</Text></Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell><Text size="3">Created</Text></Table.ColumnHeaderCell>
      {/* <Table.ColumnHeaderCell></Table.ColumnHeaderCell> */}
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {data.map(d =>(
          <Table.Row key={d.id}>
            <Table.Cell className="font-sans text-base">{data.indexOf(d)+1}</Table.Cell>
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
            {/* <Table.Cell> <DeleteButton handleDelete={()=>handleDelete(d.id)}/> </Table.Cell> */}
          </Table.Row>
    ))}
  </Table.Body>
</Table.Root>


<Flex justify="end">
  <Pagination />
</Flex>
    </>
  )
}

export default IssuesTable