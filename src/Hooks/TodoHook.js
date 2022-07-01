import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const useTodoHook = () => {
    const [tasks, setTasks] = useState([])
    useEffect( ( ) => {
       (async () => {
          const {data} = await axios.get('http://localhost:5000/tasks')
           setTasks(data)
       })()
    }, [])
    return [tasks]
}
export default useTodoHook;