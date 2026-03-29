import React, { useState } from 'react'
import userImg from '../../assets/Group -1.png'
import flagImg from '../../assets/report -1.png'
import { toast } from 'react-toastify'

function PlayerCard({player,setAvabileBalance,avabileBalance,setPurchasedPlayers,purchasedPlayers}) {
    const [isSelected,setIdSelected]=useState(false)



  return (
    <div className="card bg-base-100  shadow-sm p-4">
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
        
          <button disabled={isSelected} onClick={()=>{
            if(avabileBalance<player.price){
              toast('You dont have enough balance')
              return
            }
            if(purchasedPlayers.length>=6){
              toast('You can only select 6 players')
              return
            }
            setIdSelected(true)
            setAvabileBalance(avabileBalance-player.price)
            setPurchasedPlayers([...purchasedPlayers,player])
          }} className="btn ">{isSelected===true? 'Selected':'Choose player'}</button>
        </div>
      </div>
    </div>
           
     
        
  )

}
export default PlayerCard