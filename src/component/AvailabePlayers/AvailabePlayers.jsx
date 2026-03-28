import React from 'react'
import { use } from 'react'
import userImg from '../../assets/Group -1.png'
import flagImg from '../../assets/report -1.png'


function AvailabePlayers({fetchPlayer}) {
   const plyerData=use(fetchPlayer)
   console.log(plyerData)

  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-1  md:grid-cols-3 gap-3'>


        {
            plyerData.map(player=> <div className="card bg-base-100  shadow-sm p-4">
  <figure>
    <img
      src={player.player_image}
      alt="Shoes"
       className='w-full h-[300px] object-cover'
       />
     
  </figure>
  <div className="mt-4">
    <div className='flex'>
            <img src={userImg } alt="" /> <h2 className="card-title ml-2">{player.player_name}</h2>
    </div>

    <div className='flex justify-between mt-4 borde-b-1 border-gray-400 pb-2'>
        <div className='flex gap-2'>
            <img src={ flagImg} alt="" />
             <span className=''>{player.player_country}</span>
        </div>
        <button className='btn'>{player.player_role}</button>
    </div>


    <div className='flex justify-between font-bold '>
        <span>Rating</span>
        <span>{player.rating}</span>
    </div>


    <div className='flex justify-between mt-4'>
        <span className='font-bold'>Left hand bat</span>
        <span>Right hand bowl</span>
    </div>




    <div className="card-actions mt-4 flex justify-between items-center ">
        <p className='font-bold'>Price: ${player.price}</p>
    
      <button className="btn ">Choose Player</button>
    </div>
  </div>
</div>)
        }
 
    </div>
  )
}

export default AvailabePlayers