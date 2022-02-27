let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://telegra.ph/file/c264ba134089f0b2ef129.mp4', '', '✨ Hello Honey ✨💞\n\n▫️ Type *.botstatus* to get Botstatus 💞 \n\n▫️ Type *.menu* to get full menu 💞\n\n© Alice 🥀', m)
  
}
handler.help = ['alive']
handler.tags = ['tools']
handler.command = /^(alive)$/i

module.exports = handler
