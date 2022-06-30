import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Completed = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        (async () => {
            const {data} = await axios.get(`http://localhost:5000/completetasks`)
            setTodos(data)
        })()
    }, [])

    return (
        <div>
            <div class="flex justify-center pt-10">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block  sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="border-2">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-center font-medium text-gray-900 px-6 py-4">
                                            Serial
                                        </th>
                                        <th scope="col" class="text-center font-medium text-gray-900 px-6 py-4">
                                            First
                                        </th>
                                        <th scope="col" class="text-center font-medium text-gray-900 px-6 py-4">
                                            Last
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todos.map((t, index) =>
                                            <tr key={t.id} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {t.name}
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {t.description}
                                                </td>
                                            </tr>
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

export default Completed;