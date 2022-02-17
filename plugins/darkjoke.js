const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    let res = await fetch(API('https://v2.jokeapi.dev/', '/joke/dark', {
        q: text,
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    if (json.cod != 200) throw json
    m.reply(`
🎗 Category: res.data.category
🎋 Joke : res.data.delivery
🧨delivery: res.data.delivery
 `.trim())
}

handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^((drag|dark)joke)$/i

module.exports = handler
