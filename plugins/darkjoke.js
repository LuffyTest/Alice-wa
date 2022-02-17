const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    let res = await fetch(API('https://v2.jokeapi.dev/', '/joke/dark', {
        q: text,
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    if (json.cod != 200) throw json
    m.reply(`
🎗 Category: ${response.data.category}
🎋 Joke : ${response.data.setup}
    `.trim())
}

handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(cuaca|weather)$/i

module.exports = handler
