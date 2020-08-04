const getBallPlayers = () => {
    const response = await fetch('http://localhost:3000/player')
    const ballplayer = await response.json()
    console.log(ballplayer)
}














