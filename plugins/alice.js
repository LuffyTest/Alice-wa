const thumb = fs.readFileSync('./src/alice.mp4')
let handler = async m => m.reply(`
☕ *Tokio :* a whatsapp bot\n\n🔗 *URL :* https://github.com/itsajaygaur/tokio-wabot
conn.sendFile(m.chat, thumb, 'alice.mp4', text.`.trim()) // alive
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
