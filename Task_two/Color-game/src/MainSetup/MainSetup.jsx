import { useState } from "react"
import Reset from './restart_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg'
import './MainSetup.css'
function MainSetup() {
    const [rgbColor, setRgbColor] = useState(generateRandomColor());
    const [options, setOptions] = useState(generateColorOptions(rgbColor));
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(""); // Stores feedback message
    const [feedbackClass, setFeedbackClass] = useState(""); // Stores feedback style

    // Generate a random RGB color
    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Generate random color options including the correct one
    function generateColorOptions(correctColor) {
        const options = new Set([correctColor]);
        while (options.size < 6) {
            options.add(generateRandomColor());
        }
        return Array.from(options).sort(() => Math.random() - 0.5);
    }

    // Handle user guess
    function handleGuess(selectedColor) {
        if (selectedColor === rgbColor) {
            setScore(score + 1);
            setFeedback(" ✅ ");
            setFeedbackClass("correct");
        } else {
            setFeedback(" ❌ ");
            setFeedbackClass("wrong");
        }

        // Show feedback for a moment before changing color
        setTimeout(() => {
            nextRound();
            setFeedback(""); // Clear feedback
        }, 1000);
    }

    // Move to the next round
    function nextRound() {
        const newColor = generateRandomColor();
        setRgbColor(newColor);
        setOptions(generateColorOptions(newColor));
    }

    // Reset the game
    function resetGame() {
        const newColor = generateRandomColor();
        setRgbColor(newColor);
        setOptions(generateColorOptions(newColor));
        setScore(0);
        setFeedback(""); // Clear feedback
        setFeedbackClass("");
    }

    return (
        <div className="color-game-container">
            <div>
                <div className="color-status">
                <div className="display-status-score">
                    <h3 data-testid="score"  className="score">Score: {score}</h3>
                    <div data-testid="gameStatus" className={`feedback-message ${feedbackClass}`}>Status: {feedback}</div>
                </div>
                <div
                    className="question-game-color"
                    data-testid="colorBox"
                    style={{
                        background: rgbColor,
                    }}
                >
                </div>
                </div>
                <div className="options-container">
                    <div className="btn-container">
                        {options.map((color) => (
                            <button
                                data-testid="colorOption"
                                className="options-btn"
                                key={color}
                                onClick={() => handleGuess(color)}
                                style={{
                                    backgroundColor: color
                                }}
                                aria-label={`Choose color ${color}`}
                            ></button>
                        ))}
                    </div>
                </div>

                <button 
                data-testid="newGameButton"
                onClick={resetGame} className="reset-button">
                    Reset Game
                    <img src={Reset} alt="" />
                </button>
            </div>
        </div>
    );
}

export default MainSetup




