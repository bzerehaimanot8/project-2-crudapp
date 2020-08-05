//Global Variables


// const $nameInput = $("#createinput");
// const $playerSelect = $("#createselect");
// const $button = $("#createbutton");
// const $nameEditInput = $("#editinput");
// const $playerEditSelect = $("#editselect");
// const $editButton = $("#editbutton");
const $ul = $("ul");


//Functions
const getBallPlayers = async () => {
  //api call using asnyc/await
  const response = await fetch('http://localhost:3000/player')
  const ballplayer = await response.json()
  console.log(ballplayer)
  //populate selector w/ retrieved data
  ballplayer.forEach(player => {
    $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)
    $ul.append($player)
  })
}
getBallPlayers()


const handleAdd = async (event) => {
  //grab data from form
  const fullname1 = $('[name = "fullname"]').val()
  const position1 = $('[name = "position"]').val()

  //make a post request to create a player
  await fetch('/player', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullname1,
      position1
    })

  })

  //get full list of players
  const response = await fetch('/player')
  const ballplayer = await response.json()

  //empty the ul
  $ul.empty()

  //rebuild the ul
  ballplayer.forEach(player => {
    $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)
    $ul.append($player)
  })
}

$('button').on('click', handleAdd)





// ballplayer.forEach((player) => {
//   const $option = $('<option>').attr('value', player._id).text(player.name)
//   $playerSelect.append($option)
//   const $option2 = $("<option>").attr("value", player._id).text(player.name);
//   $playerEditSelect.append($option2)
// })












//Main App Logic
// getBallPlayers()