let xfar = require('xfarr-api')

let fetch = require('node-fetch')

let handler = async (m, { conn, command, text }) => {

    if (!text) throw 'ලින්ක් එක 😒'

  let res = await xfar.Facebook(text)

m.reply('*WAIT...*')

conn.sendFile(m.chat,res.medias[1].url, 'fb.mp4', `Tittle: ${res.tittle}
Link Video: ${res.url}
`, m)

}

handler.help = ['fb <url>', 'facebook <url>']

handler.tags = ['downloader']

handler.command = /^fb|facebook$/i

module.exports = handler
