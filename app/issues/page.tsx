'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from "@radix-ui/themes"

const IssuesPage = () => {
  return (
  <>
    <div>IssuesPage
        
    </div>
    
    <Button>
      <Link href="/issues/new">
          Create New Issue
      </Link>
    </Button>


  </>
  )
}

export default IssuesPage
