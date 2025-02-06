import './App.css'
import ColorGame from './ColorGame/ColorGame'
function App() {


  return (
    <>
    <div className="game-container">
    <h4 className="game-title">Guess the Color Game!</h4>
    <p className="game-instruction">
    Welcome, color connoisseur! Your mission—should you choose to accept it—is to match the mystery color displayed at the top with one of the sneaky impostor buttons below. Sounds easy? Think again!
    </p>
    <ColorGame />
    </div>
    </>
  )
}

export default App
