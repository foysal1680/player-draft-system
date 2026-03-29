import React from 'react'





function SelectedCard({player,romovePlayer}) {
  const hadleRemove=()=>{
    romovePlayer(player)
  }

  return (
  <div className='border-2 border-gray-300 p-3 rounded-xl flex justify-between'>
        <div className='flex items-center'>
          <img src={player.player_image} className='h-[50px] w-[50px] rounded-xl' alt="" />
          <div className='ml-2'>
            <h1>{player.player_name}</h1>
            <p className='text-xs'>{player.player_role}</p>

          </div>

        </div>
        <div onClick={hadleRemove}>
          <img src="https://i.ibb.co.com/dwgmg15D/Frame.png" alt="" />
        </div>

      </div>
  )
}

export default SelectedCard