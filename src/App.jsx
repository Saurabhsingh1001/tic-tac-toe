import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Player from './components/Tic-tac-toe.jsx';
import GameBoard from './components/GameBoard.jsx';
// import { useState } from 'react';
function App() {
  
  const[activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0': 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive ={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="0" isActive ={activePlayer === '0'} />
        </ol>
        <GameBoard onSelectSquare = {handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  )
}

export default App
