import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardSkeltonTwo({cardNumber}) {

  return Array(cardNumber).fill(0).map((__ , i) => (
    <div className='card-skelton flex justify-around items-center p-4 bg-white' key={i}>
      <span className='right'>
      <Skeleton circle  width={40} height={40}   />
      <Skeleton count={1} width={"115px"} height={"12px"}  />
      </span>
      <div className='center'>
      <Skeleton  width={"115px"} height={"25px"}/>
      </div>
      <div className='left'>
      <Skeleton circle height={40} width={40}  />
      <Skeleton count={1} width={"115px"} height={"12px"}  />
      </div>
    </div>
  ))
  
}

export default CardSkeltonTwo