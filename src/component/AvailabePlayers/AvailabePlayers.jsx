import React from 'react'
import { use } from 'react'

import PlayerCard from '../PlayerCard/PlayerCard'


function AvailabePlayers({fetchPlayer,setAvabileBalance,avabileBalance,setPurchasedPlayers,purchasedPlayers}) {
   const plyerData=use(fetchPlayer)
  //  console.log(plyerData)

  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-1  md:grid-cols-3 gap-3'>


        {
            plyerData.map(player=><PlayerCard purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} avabileBalance={avabileBalance} setAvabileBalance={setAvabileBalance} player={player}></PlayerCard> )
   
   
   }
   </div>
  )
}

export default AvailabePlayers