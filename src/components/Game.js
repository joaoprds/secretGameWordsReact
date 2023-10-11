import './Game.css'

const Game = ({ verifyLetter }) => {
    return (
        <div className ="game">
            <p className = "points">
                <span>Pontuação: 000</span>
            </p>
            <h1> Adivinhe a Palavra:</h1>
            <h3 className="tip"> Dica sobre a Palavra:...</h3>
            <p>Você ainda tem XXX tentativas</p>
            <div className="wordContainer">
                <span className="letter">A</span>
                <span className="blankSquare"></span>
            </div>
            <div className="letterContainer">
                <p>Tente Advinhar uma letra da palavra: </p>
                <form>
                    <input type="text" name="letter" maxLength="1" required />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wronLetterContainer">
                <p>Letras ja utilizadas</p>
                <p>a</p>
                <p>b</p>
            </div>
        </div>
    )
}

export default Game