import { useState, type FC } from 'react';
import { useDispatch } from 'react-redux';
import { HappyButtonClicked } from './action';

type HappyIncrementerprops = {};

const HappyIncrementer:FC<HappyIncrementerprops> = () => {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()

  function increment () {
    dispatch(HappyButtonClicked(count))
  }

  
  return (
    <div>
      <h3>Are you happy</h3>
      <input type="number" onChange={(event) => {
        setCount(+event.target.value)
      }}/>
      <button onClick={increment} className='bg-blue-700'>yes!</button>
    </div>
  )
};

export default HappyIncrementer;