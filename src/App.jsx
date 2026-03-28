import { Suspense } from "react";
import "./App.css";

import AvailabePlayers from "./component/AvailabePlayers/AvailabePlayers";
import Navbar from "./component/NavBar/Navbar";
import SelectedPlayers from "./component/SelectedPlayers/SelectedPlayers";
// import dollarImg from "./assets/Dollar-Free-Download-PNG.png";
 
const fetchPlayer=fetch('/public/player.json')
.then(res=>res.json())




function App() {

  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<span class="loading loading-dots loading-xl"></span>}>
       <AvailabePlayers fetchPlayer={fetchPlayer} >

     </AvailabePlayers>
    </Suspense>
     {/* <SelectedPlayers>

     </SelectedPlayers> */}


    </>
  );
}

export default App;
