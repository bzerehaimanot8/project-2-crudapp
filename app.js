const deployedURL = "https://roster-generator.herokuapp.com/";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

//Global Variables
const $nameInput = $("#createinput");
const $playerSelect = $("#createselect");
const $button = $("#createbutton");
const $nameEditInput = $("#editinput");
const $playerEditSelect = $("#editselect");
const $editButton = $("#editbutton");
const $ul = $('ul');
const $li = $('<li>')


//Functions
const selectPlayer = async () => {
  //api call using asnyc/await
  const response = await fetch('http://localhost:3000/player')
  const data = await response.json()
  console.log(data)
  //populate selector w/ retrieved data
  data.forEach(player => {

    const $option = $('<option>').attr('value', player._id).text(player.fullName)
    $playerSelect.append($option);
    

    
    // $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)
    // $ul.append($player)
  })

}

//GET ALL PLAYERS
const getPlayers = async () => {
//gets the players
const response = await fetch('http://localhost:3000/player')
const data = await response.json()
console.log(data)
//populate dom with players
data.forEach((player) => {
//creating li
const $li = $('<li>').text(`Name: ${player.fullName} Position: ${player.position}`)
//add a delete button for each player
$li.append($('<button>').text('delete').attr('id', player._id).on('click', deletePlayer))

//add an edit button for each rat
$li.append($('<button>').text('edit').on('click', (event)=>{
    $nameEditInput.val(player.fullName)
    $playerEditSelect.val(player.position)
    $editButton.attr('id', player._id)
}))
$ul.append($li)
}



)
}










const createPlayer = async (event) => {
  //grab data from form
  const fullName = $('[name = "fullName"]').val()
  const position = $('[name = "position"]').val()
  // const height = $('[name = "height"]').val()
  // const yearsPro = $('[name = "yearsPro"]').val()
  // const from = $('[name = "from"]').val()
  // const imageURL = $('[name = "imageURL"]').val()
  // const championships = $('[name = "championships"]').val()
  // const allStarCount = $('[name = "allStarCount"]').val()
  // const ppg = $('[name = "ppg"]').val()
  // const apg = $('[name = "apg"]').val()
  // const rpg = $('[name = "rpg"]').val()
  

  //make a post request to create a player
  await fetch('http://localhost:3000/player', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullName, position
// , height, yearsPro, from, imageURL, championships, allStarCount, ppg, apg, rpg
    })
  })

  //get full list of players
  const response = await fetch('http://localhost:3000/player')
  const data = await response.json()

  //empty the ul
  $ul.empty()

  //rebuild the ul
  data.forEach(player => {
    $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)

// Height: ${player.height} Years in the NBA: ${player.yearsPro} College/High School: ${player.from} Image URL: ${player.imageURL} Championships: ${player.championships} All Star Seasons: ${player.allStarCount} PPG: ${player.ppg} APG: ${player.apg} RPG: ${player.rpg}

    $ul.append($player)
    
    
  })

}
//ballplayer.forEach(player

const deletePlayer = async (event) => {

const response = await fetch(`${URL}/player/${event.target.id}`, {
method: 'delete'

})

$ul.empty()
getPlayers()

}




// ballplayer.forEach((player) => {
//   const $option = $('<option>').attr('value', player._id).text(player.name)
//   $playerSelect.append($option)
//   const $option2 = $("<option>").attr("value", player._id).text(player.name);
//   $playerEditSelect.append($option2)
// })



//Main App Logic
selectPlayer()
getPlayers()
$('button').on('click', createPlayer)
