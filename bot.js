require('dotenv').config()
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')


const { BOT_TOKEN } = process.env

// const mysql = require('mysql');

const bot = new Telegraf(BOT_TOKEN)

// const con = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'insert_user',
//     password: 'password',
//     database: 'database_name'
// });

// bot.onText(/\/start /, msg => {
//     const chatId = msg.chat.id;
//     const user_id = msg.from.id;
//     const name = msg.from.name;
//     const last_name = msg.from.last_name;
//     const username = msg.from.user_name;
//     user_data = [chatId, first_name, last_name, username];
//     // con.connect(function(err) {
//     //     if (err) throw err;
//     //     user_data = [user_id, first_name, last_name, username];
//     //     console.log("Connect success!");
//     //     console.log(result);
//     //     bot.sendMessage(chatId, "Bot are working!");
//     //     con.query("INSERT INTO users (CustomerID,name,Phone_number, password) VALUES ?", [user_data], function(err, result) {
//     //         if (err) throw err;
//     //         console.log("Result" + result);
//     //     })
//     // })
// })

// starting block
bot.command('start', (ctx) => {
  console.log(ctx.from)
  ctx.replyWithMarkdown('Hey there! My name is Kaku - I\'m here to help you mange your groups!\nHit /help to find out more about how to use me to full potential. \n\nJoin my [news channel](https://www.github.com/alankemboi) to information on all latest updates. \n\n Use /privacy command to view the privacy policy, and interact with you data.\n\nAuthor:@kmalan', {
    disable_web_page_preview: true,
  }, Extra.markup(Markup.inlineKeyboard(
    [Markup.urlButton('Add me to chat!', 'https://t.me')],
  )))
})

bot.command('donate', (ctx) => {
  ctx.replyWithMarkdown('So you want to donate? Amazing! It took alot of work for my creator to get me where I am now - so if you have some money to spare, and want to show your support; Donate! After all, server fees dont pay themselves - so every little helps! All donation money goes straight to funding the VPS, and of course boosting morale - always nice to see my work appreciated:)\n\nYou can donate on M-PESA [here](https://www.github.com/alankemboi) \nor PAYPAL, [here](https://www.paypal.com).\n\nIf you want tp help support me monthly basis,you can set up recurring donation on [Github Sponsors](https://www.github.com/alankemboi).\n\nThank you for your generosity!', {
    disable_web_page_preview: true,
  })
})
bot.command('help', (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, 'Help\n\nHey there! My name is Kaku. I\'m a group manager bot ,here to help you get around and keep the order in you groups!\nI have lots of handy features such as flood control, a warning system, a note keeping system, and even predetermined replies on certain keywords.\n\n**Helpful commands**\n-/start: Start me! You\'ve probably already used this.\n-/help: Sends this message; I\'ll tell you more about myself!\n/donate: Gives you info on how to support me and my creator.\n\nIf you have any bugs or questions on how to use me have a look at my website, or head to @KakuSupportChannel.\nAll commands can be used with following:/!', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Admin', callback_data: 'orders' },
          { text: 'Antiflood', callback_data: 'orders' },
          { text: 'Antiraid', callback_data: 'orders' },
        ],
        [
          { text: 'Approval', callback_data: 'orders' },
          { text: 'Bans', callback_data: 'orders' },
          { text: 'BlockLists', callback_data: 'orders' },
        ],
        [
          { text: 'CAPTCHA', callback_data: 'orders' },
          { text: 'Connections', callback_data: 'orders' },
          { text: 'Disabling', callback_data: 'orders' },
        ],
        [
          { text: 'Federations', callback_data: 'orders' },
          { text: 'Filters', callback_data: 'orders' },
          { text: 'Formatting', callback_data: 'orders' },
        ],
        [
          { text: 'Greetings', callback_data: 'orders' },
          { text: 'Import/Export', callback_data: 'orders' },
          { text: 'Languages', callback_data: 'orders' },
        ],
        [
          { text: 'Locks', callback_data: 'orders' },
          { text: 'Log channels', callback_data: 'orders' },
          { text: 'Misc', callback_data: 'orders' },
        ],
        [
          { text: 'Notes', callback_data: 'orders' },
          { text: 'Pin', callback_data: 'orders' },
          { text: 'Privacy', callback_data: 'orders' },
        ],
        [
          { text: 'Purges', callback_data: 'orders' },
          { text: 'Reports', callback_data: 'orders' },
          { text: 'Rules', callback_data: 'orders' },
        ],
        [
          { text: 'Warnings', callback_data: 'orders' },
        ],
      ],
    },
  })
})

bot.command('privacy', (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, 'Select one of the bellow options for more information about how the bot handles your privacy.', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Privacy Policy', callback_data: 'orders' },
        ],
        [
          { text: 'Retrieve Data', callback_data: 'orders' },
          { text: 'Delete Data', callback_data: 'orders' },
        ],
        [
          { text: 'Cancel', callback_data: 'orders' },
        ],
      ],
    },
  })
})

// Keyboard layout for requesting phone number and location
const requestPhoneKeyboard = {
  reply_markup: {
    one_time_keyboard: true,
    keyboard: [
      [{
        text: 'My phone number',
        request_contact: true,
        one_time_keyboard: true,
      }],
      ['Cancel'],
    ],
  },
}

const requestLocationKeyboard = {
  reply_markup: {
    one_time_keyboard: true,
    keyboard: [
      [{
        text: 'My location',
        request_location: true,
        one_time_keyboard: true,
      }],
      ['Cancel'],
    ],
  },

}

// ordering block
bot.action('orders', (ctx, next) => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard)
})

bot.on('contact', (ctx) => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard)
})

bot.hears('location', (ctx) => {
  console.log(ctx.from)
  const priceMessage = 'click one option that you prefer'

  ctx.deleteMessage()
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'food', callback_data: 'orders' },
          { text: 'drinks', callback_data: 'orders' },
        ],

      ],
    },
  })
})
bot.hears('!pin', (ctx) => {
  ctx.reply('Pinned', Extra.markup(Markup.inlineKeyboard(
    [Markup.urlButton('?????? GitHub', 'https://github.com/alankemboi/kaku')],
  ))
    .inReplyTo(ctx.message.message_id).HTML())
})
bot.launch()
