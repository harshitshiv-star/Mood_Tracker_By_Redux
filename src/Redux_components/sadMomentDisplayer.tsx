import { type FC } from 'react'
import { useSelector } from 'react-redux';
import { SadCountSelector } from './selector';

type SadMomentDisplayerProps = {}

const SadMomentDisplayer:FC<SadMomentDisplayerProps> = () => {

  const Count = useSelector(SadCountSelector);

  return (
    <div className='bg-orange-700'>
      <h1>You are sad {Count.reduce((sum, moment) => sum + moment.intensity, 0)} times</h1>
    </div>
  )
}


export default SadMomentDisplayer;