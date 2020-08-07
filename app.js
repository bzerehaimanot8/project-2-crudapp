// // const deployedURL = "https://roster-generator.herokuapp.com/";
// const deployedURL = "http://localhost:3000";
// const URL = deployedURL ? deployedURL : "http://localhost:3000";

// //Global Variables
// const $nameInput = $("#createinput");
// const $playerSelect = $("#createselect");
// const $button = $("#createbutton");
// const $nameEditInput = $("#editinput");
// const $playerEditSelect = $("#editselect");
// const $editButton = $("#editbutton");
// const $ul = $('ul');
// const $li = $('<li>')
// const $editPositionInput = $("#editPositionInput")


// //Functions
// const selectPlayer = async () => {
//   //api call using asnyc/await
//   const response = await fetch('http://localhost:3000/player')
//   const data = await response.json()
//   console.log(data)
//   //populate selector w/ retrieved data
//   data.forEach(player => {

//     const $option = $('<option>').attr('value', player._id).text(player.fullName)
//     $playerSelect.append($option);

//     // $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)
//     // $ul.append($player)
//   })

// }

// //GET ALL PLAYERS
// const getPlayers = async () => {
//   //grabs player info and stores it
//   const response = await fetch('http://localhost:3000/player')
//   //transforms this data and stores it
//   const data = await response.json()
//   console.log(data)
//   //populate dom with players
//   $ul.empty()
//   data.forEach((player) => {
//     //creates list item with player info
//     const $li = $('<li>').text(`Name: ${player.fullName} Position: ${player.position}`)
//     //appends a delete button for each player and with a click runs delete function to remove list item
//     $li.append($('<button>').text('delete').attr('id', player._id).on('click', deletePlayer))

//     //appends edit button for each player and with a click brings player info to the designated input box. also, editbutton applies to entire player id
//     $li.append($('<button>').text('edit').attr('id', player._id).on('click', (event) => {
//       $nameEditInput.val(player.fullName)
//       $editPositionInput.val(player.position)
//       // $playerEditSelect.val(player.position)
//       $editButton.attr('id', player._id)
//     }))

//     $ul.append($li)
//   })
// }






// const createPlayer = async () => {
//   //grab data from form
//   const fullName = $('[name = "fullName"]').val()
//   const position = $('[name = "position"]').val()
//   const height = $('[name = "height"]').val()
//   const yearsPro = $('[name = "yearsPro"]').val()
//   const from = $('[name = "from"]').val()
//   const imageURL = $('[name = "imageURL"]').val()
//   const championships = $('[name = "championships"]').val()
//   const allStarCount = $('[name = "allStarCount"]').val()
//   const ppg = $('[name = "ppg"]').val()
//   const apg = $('[name = "apg"]').val()
//   const rpg = $('[name = "rpg"]').val()

//   //make a post request to create a player
//   await fetch('http://localhost:3000/player', {
//     method: 'post',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       fullName,
//       position, height, yearsPro, from, imageURL, championships, allStarCount, ppg, apg, rpg
//     })
//   })
//   getPlayers()
//   // //get full list of players
//   // const response = await fetch('http://localhost:3000/player')
//   // const data = await response.json()

//   // //empty the ul
//   // $ul.empty()

//   // //rebuild the ul
//   // data.forEach(player => {
//   //   $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)

//   //   // Height: ${player.height} Years in the NBA: ${player.yearsPro} College/High School: ${player.from} Image URL: ${player.imageURL} Championships: ${player.championships} All Star Seasons: ${player.allStarCount} PPG: ${player.ppg} APG: ${player.apg} RPG: ${player.rpg}

//   //   $ul.append($player)

//   // })
// }
// //ballplayer.forEach(player




// const deletePlayer = async (event) => {
//   const response = await fetch(`${URL}/player/${event.target.id}`, {
//     method: 'delete'
//   })
//   $ul.empty()
//   getPlayers()
// }




// const editPlayer = async (event) => {

//   const updatedPlayer = {
//     "fullName": $nameEditInput.val(),
//     "position": $editPositionInput.val()
//   }
//   // const fullName = $('[name = "fullName"]').val()
//   // const position = $('[name = "position"]').val()

//   const response = await fetch(`${URL}/player/${event.target.id}`, {
//     method: 'put',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(updatedPlayer)

//   })
//   $ul.empty()
//   getPlayers()
// }



// // ballplayer.forEach((player) => {
// //   const $option = $('<option>').attr('value', player._id).text(player.name)
// //   $playerSelect.append($option)
// //   const $option2 = $("<option>").attr("value", player._id).text(player.name);
// //   $playerEditSelect.append($option2)
// // })



// //Main App Logic
// selectPlayer()
// getPlayers()
// $button.on('click', createPlayer)
// $editButton.on('click', editPlayer)

// // $('button).on('click', createPlayer)

// const deployedURL = "https://roster-generator.herokuapp.com/";
const deployedURL = "https://roster-generator.herokuapp.com";
const URL = deployedURL ? deployedURL : "http://localhost:3000";

//Global Variables
const $nameInput = $("#createinput");
const $playerSelect = $("#createselect");
const $button = $("#createbutton1");
const $nameEditInput = $("#editinput");
const $playerEditSelect = $("#editselect");
const $editButton = $("#editbutton");
const $ul = $('ul');
const $li = $('<li>')
const $editPositionInput = $("#editPositionInput")


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
  //grabs player info and stores it
  const response = await fetch('http://localhost:3000/player')
  //transforms this data and stores it
  const data = await response.json()
  console.log(data)
  //populate dom with players
  $ul.empty()
  data.forEach((player) => {
    //creates list item with player info
    const $li = $('<li>').text(`Name: ${player.fullName} Position: ${player.position}`)
    //appends a delete button for each player and with a click runs delete function to remove list item
    $li.append($('<button>').text('delete').attr('id', player._id).on('click', deletePlayer))

    //appends edit button for each player and with a click brings player info to the designated input box. also, editbutton applies to entire player id
    $li.append($('<button>').text('edit').attr('id', player._id).on('click', (event) => {
      $nameEditInput.val(player.fullName)
      $editPositionInput.val(player.position)
      // $playerEditSelect.val(player.position)
      $editButton.attr('id', player._id)
    }))

    $ul.append($li)
  })
}






const createPlayer = async () => {
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
      fullName,
      position, height, yearsPro, from, imageURL, championships, allStarCount, ppg, apg, rpg
    })
  })
  getPlayers()
  // //get full list of players
  // const response = await fetch('http://localhost:3000/player')
  // const data = await response.json()

  // //empty the ul
  // $ul.empty()

  // //rebuild the ul
  // data.forEach(player => {
  //   $player = $('<li>').text(`Player Name: ${player.fullName} Position: ${player.position}`)

  //   // Height: ${player.height} Years in the NBA: ${player.yearsPro} College/High School: ${player.from} Image URL: ${player.imageURL} Championships: ${player.championships} All Star Seasons: ${player.allStarCount} PPG: ${player.ppg} APG: ${player.apg} RPG: ${player.rpg}

  //   $ul.append($player)

  // })
}
//ballplayer.forEach(player




const deletePlayer = async (event) => {
  const response = await fetch(`${URL}/player/${event.target.id}`, {
    method: 'delete'
  })
  $ul.empty()
  getPlayers()
}




const editPlayer = async (event) => {

  const updatedPlayer = {
    "fullName": $nameEditInput.val(),
    "position": $editPositionInput.val()
  }
  // const fullName = $('[name = "fullName"]').val()
  // const position = $('[name = "position"]').val()

  const response = await fetch(`${URL}/player/${event.target.id}`, {
    method: 'put',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPlayer)

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
$button.on('click', createPlayer)
$editButton.on('click', editPlayer)

// $('button').on('click', createPlayer)