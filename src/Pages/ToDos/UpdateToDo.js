import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from 'axios'
import {toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const UpdateToDo = ({todo, refetch}) => {
    const {_id} = todo;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleonSubmit = e => {
        e.preventDefault()
        const task = {
          name: e.target.name.value,
          description : e.target.description.value,
          deadline: e.target.deadline.value
        }
        axios.put(`http://localhost:5000/tasks/${_id}`, task)
        .then(function (response){
          console.log(response)
        })
        refetch()
        handleClose(true)
        toast.success('Task updated successfully')
      }

    return (
        <div>
            <Button onClick={handleOpen}><BorderColorIcon></BorderColorIcon></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form action="" onSubmit={handleonSubmit}>
                        <label class="label block">
                            <span class="label-text">What is your Task?</span>
                        </label>
                        <input name='name' className='py-3 pl-3 my-3 bg-[#F1F5F9] rounded focus:outline-none w-full' type="text" placeholder='Type task' />
                        <label class="label block">
                            <span class="label-text">What is your Deadline?</span>
                        </label>
                        <input name='deadline' className='py-3 pl-3 my-3 bg-[#F1F5F9] rounded focus:outline-none w-full' type="text" placeholder='Type task' />
                        <textarea name='description' className='py-3 pl-3 mb-3 bg-[#F1F5F9] rounded focus:outline-none block w-full' type="text" placeholder='Type task' />
                        <input class="inline-block px-6 py-2.5 bg-primary-shade-600 text-base-100 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-shade-700 hover:shadow-lg focus:bg-primary-shade-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-shade-800 active:shadow-lg transition duration-150 ease-in-out" type="submit" value="Add to Task" />
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateToDo;