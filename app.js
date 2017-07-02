const Telegraf = require('telegraf')

const app = new Telegraf(376731137:AAEQdPZdUaPhQsL_4X02r5VPmfe2KyGTreE)
app.command('start', ({ from, reply }) => {
  console.log('start', from)
  return reply('Welcome!')
})
app.hears('hi', (ctx) => ctx.reply('Hey there!'))
app.on('sticker', (ctx) => ctx.reply('👍'))
app.startPolling()

//376731137:AAEQdPZdUaPhQsL_4X02r5VPmfe2KyGTreE
// 216029435
//1499005107
