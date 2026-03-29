import { Suspense, useState } from "react";
import "./App.css";


  import { ToastContainer } from 'react-toastify';

import AvailabePlayers from "./component/AvailabePlayers/AvailabePlayers";
import Navbar from "./component/NavBar/Navbar";
import SelectedPlayers from "./component/SelectedPlayers/SelectedPlayers";
// import dollarImg from "./assets/Dollar-Free-Download-PNG.png";
 
const fetchPlayer=fetch('/public/player.json')
.then(res=>res.json())




function App() {
  const [toggle,setToggle]=useState(true)
  const [avabileBalance,setAvabileBalance]=useState(600000000)
  const [purchasedPlayers,setPurchasedPlayers]=useState([])


  const romovePlayer=(p)=>{
    const filterPlayer=purchasedPlayers.filter(player=>player.player_name!==p.player_name)
    setPurchasedPlayers(filterPlayer)
    setAvabileBalance(avabileBalance+p.price)
  }


  return (
    <>
    <Navbar avabileBalance={avabileBalance}></Navbar>

    <div className="max-w[1200p] mx-auto flex justify-between items-center">
      <h1 className="font-bold text-2xl">
        {toggle===true? 'Availabe Players':`Selected Players (${purchasedPlayers.length}/6)`}

      </h1>
      <div className="font-bold">
        <button onClick={()=>setToggle(true)} className={` ${toggle===true?'bg-[#E7FE29]':''} py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0`}>Availabe</button>
        <button onClick={()=>setToggle(false)} className={`py-3 ${toggle===false?'bg-[#E7FE29]':''} px-4 border-1 border-gray-400 rounded-r-2xl border-l-0`}>Selected <span>({purchasedPlayers.length})</span></button>
      </div>

    </div>

    {
      toggle ===true?  <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
       <AvailabePlayers setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} avabileBalance={avabileBalance} setAvabileBalance={setAvabileBalance} fetchPlayer={fetchPlayer} >

     </AvailabePlayers>
    </Suspense>:   
    <SelectedPlayers  romovePlayer={romovePlayer} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} avabileBalance={avabileBalance} setAvabileBalance={setAvabileBalance}>

     </SelectedPlayers>
    }


     <ToastContainer/>
    </>
  );
}

export default App;
