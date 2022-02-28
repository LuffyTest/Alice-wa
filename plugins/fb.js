let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. where is the url?\n\nUse:\n${usedPrefix + command} url\nExample :\n${usedPrefix + command} https://www.facebook.com/xxxxx/videos/xxxx`
    let res = await fetch(API('neoxr', '/fb', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.data.url, json.data.quality, wm, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i


module.exports = handler
