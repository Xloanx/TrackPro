'use client'
import React, { useState } from 'react'
import { AlertDialog, Flex, Button, Spinner} from "@radix-ui/themes"
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';
import axios from 'axios';

const DeleteButton = ({issueId}) => {
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const router = useRouter();

  const deleteIssue = async () =>{
    try {
      setDeleting(true)
      await axios.delete(`/api/issues/${issueId}`)
      router.push('/issues');
      router.refresh();
    } catch (error) {
      setDeleting(false)
      setError(true);
    }
  }




  return (
    <>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red" disabled={isDeleting}>Delete Issue
            {isDeleting && <Spinner loading>
                        </Spinner>}
            </Button>
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
                <Button variant="solid" color="red" onClick={deleteIssue}>
                  Confirm Delete
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>


        <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This issue could not be deleted.
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}

export default DeleteButton