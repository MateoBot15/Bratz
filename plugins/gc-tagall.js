let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `MENSAJE: ${pesan}`
let teks = `𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐏𝐥𝐚𝐧𝐭𝐢𝐭𝐚𝐬 💸 \n\n ${oi}\n  ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂: \n`
for (let mem of participants) {
teks += `🕯️ @${mem.id.split('@')[0]}\n`}
teks += `🐾PACME BRATZ ᥫ᭡፝֟፝֟  `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
