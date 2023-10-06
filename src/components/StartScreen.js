import './StartScreen.css'

const StartScreen = ({startGame}) => {
    return (
        <div className = "start">
            <h1>Secret Words</h1>
            <p>Clique no botão Abaixo</p>
            <button onClick ={startGame}>Começar o Jogo</button>
        </div>
    )
}

export default StartScreen