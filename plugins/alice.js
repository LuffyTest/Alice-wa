   
let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://telegra.ph/file/c264ba134089f0b2ef129.mp4', '', '✨ Hello World ✨💞
📊 Active Since: ${uptime}
 🧬 Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Charging' : ''}` : 'Unknown'}

Type .menu to get full menu 💞✨🤍', m)
  
}
handler.help = ['alive']
handler.tags = ['tools']
handler.command = /^(alive)$/i

module.exports = handler
