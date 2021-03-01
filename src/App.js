import logo from './logo.svg';
import './App.css';
import playerData from './fake data/data.json'
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import './components/Player/player.css';
import Salary from './components/Player/Salary';
 

function App() {
  const [players, setPlayer]= useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  useEffect(() =>{
    setPlayer(playerData);
    
    const playerNames =playerData.map(player => player.name)
     
  })

   const handleAddPlayer = (player) => 
   {
     const newPlayer = [...selectedPlayer,player];
     setSelectedPlayer(newPlayer);
   }

  return (
 <div className="App">
      <h1>Total Number of Player:{playerData.length} </h1>
      <h2> Player added : {selectedPlayer.length}</h2>
       
      <ul>
            {
             playerData.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer} > </Player>)

            }
      </ul>



       
    </div>
  );
}


export default App;
