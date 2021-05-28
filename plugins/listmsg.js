let handler = m => {
    let msgs = global.DATABASE._data.msgs
    m.reply(`
*MESSAGE LIST*

${Object.keys(msgs).map(v => '- ' + v).join('\n')}
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(vn|msg|video|audio|img|sticker)$/

module.exports = handler