import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import Loader from '../../Components/Loader';
import ToDosTable from './ToDosTable';

const ToDo = () => {
   const {updateToDo, setUpdateToDo} = useState(null)
    const { data, isLoading, refetch } = useQuery('todos', () =>
        fetch('http://localhost:5000/tasks')
            .then(res => {
                return res.json()
            })
    )
console.log(data)
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                            #
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                            Mark Complete
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                           Task Name
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                           Description
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                            Deadline
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                           Edit tast
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((todo, index) =>
                                            <ToDosTable key={todo._id} todo={todo} refetch={refetch} index={index} setUpdateToDo={setUpdateToDo}></ToDosTable>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;