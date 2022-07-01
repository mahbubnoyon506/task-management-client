import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Completed = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://red-poppy-97551.herokuapp.com/completetasks`)
            setTodos(data)
        })()
    }, [])

    return (
        <div>
            <div class="flex flex-col py-10 px-20 bg-[#F9F8F3]">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                          Serial
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                            Task Name
                                        </th>
                                        <th scope="col" class=" font-medium text-gray-900 px-6 py-4 text-left">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todos.map((t, index) =>
                                            <tr key={t.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#DAE7CB]">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {t.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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




