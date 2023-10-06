import './GameOver.css'

const GameOver = ({retry}) => {
    return (
        <div>
        <h1>Resetar Jogo</h1>
        <button onClick ={retry}>Finalizar Jogo</button>
    </div>
    )
}

export default GameOver