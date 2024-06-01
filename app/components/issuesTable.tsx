import React from 'react'
import { Table, Badge } from '@radix-ui/themes'
import EditButton from './editButton';
import DeleteButton from './deleteButton';

// interface Data {
//   id: number,
//   title: string,
//   description: string,
//   createdAt: Date,
//   updatedAt: Date,
// }

const IssuesTable = ({data, handleDelete}) => {
  return (
    <Table.Root>
  <Table.Header>
    <Table.Row>
    <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {data.map(d=>(
          <Table.Row key={d.id}>
            <Table.Cell className="font-sans text-base">{data.indexOf(d)+1}</Table.Cell>
            <Table.Cell className="font-sans text-base">{d.title}</Table.Cell>
            <Table.Cell className="font-sans text-base">
              <Badge 
                color={ d.status === "OPEN"         ? ("red")  : 
                        d.status === "IN PROGRESS"  ?  ("blue") : 
                        d.status === "CLOSED"       ? ("green") :""
                      }>
                {d.status}
              </Badge>
            </Table.Cell>
            <Table.Cell className="font-sans text-base">{new Date(d.createdAt).toDateString()}</Table.Cell>
            <Table.Cell> <EditButton /> </Table.Cell>
            <Table.Cell> <DeleteButton handleDelete={()=>handleDelete(d.id)}/> </Table.Cell>
          </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
  )
}

export default IssuesTable