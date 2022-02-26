const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Example:\n${usedPrefix + command} Alice`

  let res = await fetch(global.API('zeks', '/igs', { username: args[0] }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.profilehd, 'eror.jpg', `*🔅 Full Name:* ${json.data.fullname}\n*🔰 Bio:* ${json.data.bio}\n*🔹 Followers:* ${json.data.follower}\n*🔸 Following:* ${json.data.following}\n*💬 Posts:* ${json.data.timeline}\n*🌀 Private:* ${json.data.private ? 'Ya' : 'Tidak'}\n\nhttp://instagram.com/alicewabot`, m, 0, { thumbnail: await (await fetch(json.data.profilehd)).buffer() })
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler
