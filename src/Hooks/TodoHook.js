import axios from 'axios'
import { useEffect, useState } from 'react'

const useTodoHook = () => {
    const [tasks, setTasks] = useState([])
    useEffect( ( ) => {
       (async () => {
          const {data} = await axios.get('https://red-poppy-97551.herokuapp.com/tasks')
           setTasks(data)
       })()
    }, [])
    return [tasks]
}
export default useTodoHook;