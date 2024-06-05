import React from 'react'

const DeletionConfirmation = () => {
  return (
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm Deletion</h3>
                <p className="py-4">Are you sure you want to delete this issue?
                                    This action cannot be reversed</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" color="gray">Cancel</button>
                    <button className="btn" color="red">Confirm</button>
                </form>
                </div>
            </div>
            </dialog>
  )
}

export default DeletionConfirmation