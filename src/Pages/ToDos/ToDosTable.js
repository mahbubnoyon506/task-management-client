import React, { useEffect, useState } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import UpdateToDo from './UpdateToDo';
import axios from 'axios';


const ToDosTable = ({ todo, index, refetch }) => {
    const {_id, name, description, deadline } = todo;
    
const handleAddtoComplete = () => {
    const tasks = {
        name, description, deadline
    }
    axios.post('http://localhost:5000/completetasks', tasks)
    .then(function (response) {
        console.log(response)
    })
}

    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div class="form-check">
                    <input onClick={handleAddtoComplete} class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                </div>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {name}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {description}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {deadline}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <UpdateToDo todo={todo}></UpdateToDo>
            </td>
        </tr>
    );
};

export default ToDosTable;