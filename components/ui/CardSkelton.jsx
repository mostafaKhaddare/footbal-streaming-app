import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardSkelton({cardNumber}) {
  return  Array(cardNumber).fill(0).map((__ , i) => (
    <div className='card-skelton flex justify-around items-center p-4' key={i}>
      <span className='right'>
      <Skeleton circle  width={40} height={40}   />
      </span>
      <div className='center'>
      <Skeleton width={"115px"}  />
      </div>
      <div className='left'>
      <Skeleton circle height={40} width={40}  />
      </div>
    </div>
  ))
}

export default CardSkelton