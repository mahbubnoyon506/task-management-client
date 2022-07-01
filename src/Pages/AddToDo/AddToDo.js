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

  axios.post('https://red-poppy-97551.herokuapp.com/tasks', task)
  .then(function (response){
  })
  e.target.reset();
  toast.success('Wow!! Task added successfully')
}

  return (
    <div className='bg-[#F9F8F3] px-20 py-10'>
    <div className='rounded-r-lg shadow-lg shadow-secondary w-[50rem] mx-auto p-10 mt-10 bg-base-100 '>
      <form action="" onSubmit={handleonSubmit}>
        <label className="label block">
          <span className="label-text">What is your Task?</span>
        </label>
        <input name='name' className='py-3 pl-3 my-3 bg-[#F1F5F9] rounded focus:outline-none w-full' type="text" placeholder='Type task' required/>
        <label className="label block">
          <span className="label-text">What is your Deadline?</span>
        </label>
        <input name='deadline' className='py-3 pl-3 my-3 bg-[#F1F5F9] rounded focus:outline-none w-full' type="text" placeholder='Type task' required/>
        <textarea name='textarea' className='py-3 pl-3 mb-3 bg-[#F1F5F9] rounded focus:outline-none block w-full' type="text" placeholder='Type task' required/>
        <input className="inline-block px-6 py-2.5 bg-primary-shade-600 text-base-100 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-shade-700 hover:shadow-lg focus:bg-primary-shade-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-shade-800 active:shadow-lg transition duration-150 ease-in-out" type="submit" value="Add to Task" />
      </form>
    </div>
    </div>
  );
};

export default AddToDo;


