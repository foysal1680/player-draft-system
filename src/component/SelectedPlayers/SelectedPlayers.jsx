import React from 'react'
import SelectedCard from '../SelectedCard/SelectedCard'

function SelectedPlayers({purchasedPlayers, romovePlayer}) {
  console.log(purchasedPlayers)
  return (
    <div className="max-w-[1200px] mx-auto ">

    {
        purchasedPlayers.map(player=><SelectedCard  romovePlayer={romovePlayer} player={player}></SelectedCard>)
    }

    </div>
  )
}

export default SelectedPlayers