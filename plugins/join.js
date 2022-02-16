let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Wrong Link'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendButton(res.gid, `
*${conn.user.name}* is a whatsapp bot built with Nodejs, *${conn.user.name}* was invited by @${m.sender.split`@`[0]}
    
ketik *${usedPrefix}menu* untuk melihat daftar perintah`.trim(), '© Alice -🥀', 'MENU', `${usedPrefix}?`, m)
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['tools']
handler.command = /^join$/i

handler.premium = true

module.exports = handler
