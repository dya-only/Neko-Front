import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'

function Index() {
  const [count, setCount] = useState(0)
  const [data, setData]: any = useState([]);

  useEffect(() => {

    const getNeko = async () => {
      await axios.get('/api/v1/neko')
        .then(resp => { console.log("resp: " , resp.data); setData(resp.data) } )
    }

    getNeko()
    console.log("data", data)

  }, [count])


  return (
    <div className="index flex justify-center items-center h-screen w-screen">
      <img className="img w-[600px] h-[450px] drop-shadow-2xl rounded-xl object-contain" src={ data.image } />
    </div>
  )
}

export default Index
