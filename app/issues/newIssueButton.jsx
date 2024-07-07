import React from 'react';
import Link from 'next/link';
import { Button } from '@radix-ui/themes';

const NewIssueButton = () => {
  return (
    <Button variant="classic" radius="small">
    <Link href="/issues/new">
      Create New Issue
    </Link>
  </Button>
  )
}

export default NewIssueButton