import React from 'react'
import { Table } from '@radix-ui/themes'

const IssuesTable = ({data}) => {
  return (
    <Table.Root>
  <Table.Header>
    <Table.Row>
    <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Date Created</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    {data.map(d=>(
            <Table.Row key={d.id}>
            {/* <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell> */}
            <Table.Cell></Table.Cell>
            <Table.Cell>{d.title}</Table.Cell>
            <Table.Cell>{d.status}</Table.Cell>
            <Table.Cell>{d.createdAt}</Table.Cell>
          </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
  )
}

export default IssuesTable