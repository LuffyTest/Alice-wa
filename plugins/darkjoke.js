let fetch = require('node-fetch')

let handler = async (m, { }) => {
  let res = await fetch(API('https://v2.jokeapi.dev/', '/joke/dark', {}, ''))
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  m.reply(json.dark)

🎗 Category: ${json.category}
🎋 Joke : ${json.setup}
🧨 delivery: ${json.delivery}

}



handler.help = ['joke', 'jokes']
handler.tags = ['fun']
handler.command = /^(joke|jokes)$/i

module.exports = handler
