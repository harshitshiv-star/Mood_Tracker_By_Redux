import { useState, type FC } from 'react'
import { useDispatch } from 'react-redux'
import { SadButtonClicked } from './action'

type SadIncrementerProps = {}

const SadIncrementer:FC<SadIncrementerProps> = () => {
  const [count, setCount] = useState(0)
    const dispatch = useDispatch()
  
    function increment () {
      dispatch(SadButtonClicked(count))
    }
  

  return (
    <div>
      <h3>Are you sad?</h3>
      <input type="number" onChange={(event) => {
        setCount(+event.target.value)
      }}/>
      <button onClick={increment} className='bg-blue-700'>Yes!</button>
    </div>
  )
}

export default SadIncrementer;