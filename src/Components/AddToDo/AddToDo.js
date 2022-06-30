import { LineAxisOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import axios from 'axios'
import {toast } from 'react-toastify';

const AddToDo = () => {
const handleonSubmit = e => {
  e.preventDefault()
  const task = {
    name: e.target.name.value,
    description : e.target.textarea.value,
    deadline: e.target.deadline.value
  }
  console.log(task)
  axios.post('http://localhost:5000/tasks', task)
  .then(function (response){
    console.log(response)
  })
  e.target.reset();
  toast.success('Wow!! Task added successfully')
}
  return (
    <div>
    <div className=' shadow-lg  w-[50rem] mx-auto p-10 mt-10'>
      <form action="" onSubmit={handleonSubmit}>
        <label class="label block">
          <span class="label-text">What is your Task?</span>
        </label>
        <input name='name' className='py-3 pl-3 my-3 bg-[#F1F5F9] rounded focus:outline-none w-full' type="text" placeholder='Type task' required/>
        <label class="label block">
          <span class="label-text">What is your Deadline?</span>
        </label>
        <input name='deadline' className='py-3 pl-3 my-3 bg-[#F1F5F9] rounded focus:outline-none w-full' type="text" placeholder='Type task' required/>
        <textarea name='textarea' className='py-3 pl-3 mb-3 bg-[#F1F5F9] rounded focus:outline-none block w-full' type="text" placeholder='Type task' required/>
        <input class="inline-block px-6 py-2.5 bg-primary-shade-600 text-base-100 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-shade-700 hover:shadow-lg focus:bg-primary-shade-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-shade-800 active:shadow-lg transition duration-150 ease-in-out" type="submit" value="Add to Task" />
      </form>
    </div>
    </div>
  );
};

export default AddToDo;


