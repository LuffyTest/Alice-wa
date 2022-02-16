let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw !0 // jika link grup itu sendiri gak dikick
    await this.sendButon(m.chat, `*GROUP LINK DETECTED!!*${isBotAdmin ? '' : '\n\nNot admin so cant kick t_t'}\n\nType *.off antilink* to turn off this feature${db.data.settings[this.user.jid].restrict ? '' : '\ntype *.on restrict* so you can kick'}`, '© Alice 🤍🥀', 'Turn off Antilink', ',0 antilink', m)
    if (db.data.settings[this.user.jid].restrict) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
    }
  }
  return !0
}

module.exports = handler
