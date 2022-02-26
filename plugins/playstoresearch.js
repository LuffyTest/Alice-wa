let fetch = require('node-fetch')

let handler = async (m, { }) => {
  let res = await fetch(global.API('zeks', '/api/sgplay', { q: text }, 'apikey'))
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  m.reply(`
🎗 Title: ${json.title}
🎋 Developer: ${json.developer}
🧨 Url: ${json.url}
🔖 Price: ${json.price}
🔖 Rating: ${json.rating}
 `.trim())
}



handler.help = ['playstore']
handler.tags = ['search']
handler.command = /^(playstore|ps)$/i

module.exports = handler
