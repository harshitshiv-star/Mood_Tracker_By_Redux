import { type FC } from 'react'
import { useSelector } from 'react-redux'
import { HappyCountSelector } from './selector'

type HappyMomentDisplayerProps = {}

const HappyMomentDisplayer:FC<HappyMomentDisplayerProps> = () => {

  const Count = useSelector(HappyCountSelector);

  return (
    <div className='bg-orange-700'>
      <h1>You are happy {Count.reduce((sum, moment) => sum + moment.intensity, 0)} times</h1>
    </div>
  )
}


export default HappyMomentDisplayer