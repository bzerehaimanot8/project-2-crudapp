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


//Functions
const getBallPlayers = async () => {
  //api call using asnyc/await
  const response = await fetch('http://localhost:3000/player')
  const ballplayer = await response.json()
  console.log(ballplayer)
  //populate selector w/ retrieved data
  ballplayer.forEach(player => {

    const $option = $('<option>').attr('value', player._id).text(player.fullName)
    $playerSelect.append($option);




    // $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)
    // $ul.append($player)
  })
}



const createPlayer = async (event) => {
  //grab data from form
  const fullName = $('[name = "fullName"]').val()
  const position = $('[name = "position"]').val()
  const height = $('[name = "height"]').val()
  const yearsPro = $('[name = "yearsPro"]').val()
  const from = $('[name = "from"]').val()
  const imageURL = $('[name = "imageURL"]').val()
  const championships = $('[name = "championships"]').val()
  const allStarCount = $('[name = "allStarCount"]').val()
  const ppg = $('[name = "ppg"]').val()
  const apg = $('[name = "apg"]').val()
  const rpg = $('[name = "rpg"]').val()
  

  //make a post request to create a player
  await fetch('http://localhost:3000/player', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fullName, position, height, yearsPro, from, imageURL, championships, allStarCount, ppg, apg, rpg
    })
  })

  //get full list of players
  const response = await fetch('http://localhost:3000/player')
  const ballplayer = await response.json()

  //empty the ul
  $ul.empty()

  //rebuild the ul
  // ballplayer.forEach(player => {
    $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position} Height: ${player.height} Years in the NBA: ${player.yearsPro} College/High School: ${player.from} Image URL: ${player.imageURL} Championships: ${player.championships} All Star Seasons: ${player.allStarCount} PPG: ${player.ppg} APG: ${player.apg} RPG: ${player.rpg}`)
    $ul.append($player)
  // })

}

$('button').on('click', createPlayer)





// ballplayer.forEach((player) => {
//   const $option = $('<option>').attr('value', player._id).text(player.name)
//   $playerSelect.append($option)
//   const $option2 = $("<option>").attr("value", player._id).text(player.name);
//   $playerEditSelect.append($option2)
// })












//Main App Logic
getBallPlayers()