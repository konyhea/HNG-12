import './GameInstruction.css'
export default function GameInstruction() {
  return (
    <div>
     <div className="game-instruction">
      <h4 data-testid="gameInstructions">Color Guessing Game Instructions:</h4>
      <ul className="list-of-instruction">
        <li className="game-instruction">
        Look at the color displayed in the box.
        </li>
        <li className="game-instruction">
        Click on the button that matches the color.
        </li>
        <li className="game-instruction">
        If correct, your score increases.
        </li>
        <li className="game-instruction">
        Click the reset button to start a new game.
        </li>
      </ul>
      <p className="goodluck">Good luck! 🚀</p>
    </div>
    </div>
  )
}
