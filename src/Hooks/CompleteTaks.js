import axios from 'axios'
import { useEffect, useState } from 'react'

const useComplete = () => {
    const [complete, setComplete] = useState([])
    useEffect( ( ) => {
       (async () => {
          const {data} = await axios.get('https://red-poppy-97551.herokuapp.com/completetasks')
          setComplete(data)
       })()
    }, [])
    return [complete]
}
export default useComplete;