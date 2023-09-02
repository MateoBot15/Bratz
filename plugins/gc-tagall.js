let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `☘️@𝐦𝐚𝐭𝐞𝐨_𝐯𝐞𝐧𝐭𝐚𝐬_: ${pesan}`
let teks = `Creador Wa.me/51929741688 SI QUIERES BOT COMUNICAME

☘️𝐌𝐚𝐭𝐞𝐨 𝐁𝐨𝐭☘️ \n\n ${oi}\n ☘️ ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂: \n`
for (let mem of participants) {
teks += `☘️  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐌𝐚𝐭𝐞𝐨 𝐁𝐨𝐭☘️`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
