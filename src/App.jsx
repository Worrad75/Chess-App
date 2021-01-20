import './App.css';
import { useEffect, useState } from 'react'
import { gameSubject } from './COMPONENTS/Game'
import Board from './COMPONENTS/Board'

function App() {
const [board, setBoard] = useState([])
useEffect(() => { 
  const subscriber = gameSubject.subscribe( game => setBoard(game.board))
  return () => subscriber.unsubscribe()
}, [])

  return (
    <div className="container">
      <div className="board-container">
        <Board board={board}></Board>
      </div>
    </div>
    
  );
}

export default App;
