import GameInstruction from './GameInstruction/GameInstruction'
import MainSetup from './MainSetup/MainSetup'
import './App.css'

function App() {

  return (
    <>
    <div className="game-title">
      <h3 className="game-title-heading">Guess Color Game</h3>
      <GameInstruction />
    </div>

    <MainSetup />
    </>
  )
}

export default App
