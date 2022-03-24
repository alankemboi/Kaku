const { errorHandler } = require('@/helpers')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

module.exports = () => async (ctx) => {
  if (ctx.chat.type === 'private') {
    ctx.reply(`
Hey there! My name is Kaku - I\'m here to help you mange your groups!\nHit /help to find out more about how to use me to full potential. \n\nJoin my [news channel](https://www.github.com/alankemboi) to information on all latest updates. \n\n Use /privacy command to view the privacy policy, and interact with you data
Add me to your chat and give me admin rights.
I will show a captcha message to each newcomer to your chat.
Also you can edit messages and a bit of my behavior with /settings command in a chat where you are admin.

Created by @kmalan`, parse_mode = "Markdown")
      .catch(errorHandler)
  }
}
