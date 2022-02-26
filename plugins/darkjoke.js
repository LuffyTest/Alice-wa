const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    let res = await fetch(API('https://v2.jokeapi.dev/', '/joke/dark', {
    if (!res.ok) throw `${res.status} ${res.statusText}`
    let json = await res.json()
  m.reply(json.dark)
}

🎗 Category: ${json.category}
🎋 Joke : ${json.setup}
🧨 delivery: ${json.delivery}
 `.trim())
}

handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^((drag|dark)joke)$/i

module.exports = handler
