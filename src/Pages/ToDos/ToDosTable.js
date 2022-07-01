import React from 'react';

import UpdateToDo from './UpdateToDo';
import axios from 'axios';
import {toast } from 'react-toastify';

const ToDosTable = ({ todo, index, refetch }) => {
    const {_id, name, description, deadline } = todo;
    
const handleAddtoComplete = () => {
    const tasks = {
        name, description, deadline
    }
    axios.post('https://red-poppy-97551.herokuapp.com/completetasks', tasks)
    .then(function (response) {
       if(response.data.acknowledged === true){
        toast.success('Task successfully added to the Completed list')
    }
    })
    fetch(`https://red-poppy-97551.herokuapp.com/task/${_id}`, {
        method : 'DELETE'
    })
    .then(res => {
        res.json()
    })
    .then( data => {
        refetch()
    })

}

    return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#DAE7CB]">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="form-check">
                    <input onClick={handleAddtoComplete} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                </div>
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {name}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {description}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {deadline}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <UpdateToDo todo={todo} refetch={refetch}></UpdateToDo>
            </td>
        </tr>
    );
};

export default ToDosTable;