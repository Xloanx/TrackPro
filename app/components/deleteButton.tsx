'use client'
import React from 'react'
import { AlertDialog, Flex, Button} from "@radix-ui/themes"
import { MdDelete } from "react-icons/md";


const DeleteButton = ({handleDelete}) => {
  return (
    <>
        <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Delete Issue</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
    <AlertDialog.Description size="2">
    Are you sure you want to delete this issue? This action cannot be reversed.
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red">
          Confirm Delete
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
    </>
  )
}

export default DeleteButton