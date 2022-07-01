import axios from 'axios'
import { useEffect, useState } from 'react'

const useComplete = () => {
    const [complete, setComplete] = useState([])
    useEffect( ( ) => {
       (async () => {
          const {data} = await axios.get('http://localhost:5000/completetasks')
          setComplete(data)
       })()
    }, [])
    return [complete]
}
export default useComplete;