import React from 'react'

const NewIssuePage = () => {
  return (
    <>
    <div>
        New Issue Page
    </div>

    <div className='max-w-xl space-y-3'>
        <input type="text" placeholder="Title" className="input input-bordered input-accent w-full max-w-xs" /> <br/>
        <textarea className="textarea textarea-accent textarea-lg w-full max-w-xs" placeholder="Description"></textarea> <br />
        <button className="btn btn-active btn-accent">Submit Issue</button>
    </div>
  </>
  )
}

export default NewIssuePage