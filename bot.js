const Telegraf = require('telegraf');
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')


// const mysql = require('mysql');

const bot = new Telegraf('5219821536:AAHBdYemdRXvq_sC0Nta8uvs7Mh75tQWEzw');

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

//starting block
bot.command('start', ctx => {
    console.log(ctx.from)
    ctx.reply('Hey there! My name is Kaku - I\'m here to help you mange your groups!\nHit /help to find out more about how to use me to full potential. \n\nJoin my news channel to information on all latest updates. \n\n Use /privacy command to view the privacy policy, and interact with you data.\n\nAuthor:@kmalan', Extra.markup(Markup.inlineKeyboard(
        [Markup.urlButton('Add me to chat!', 'https://t.me')]
    )).HTML())
})
bot.command('link', ctx => {
    const text = '[Link here](href="https://www.paypal.com)';
    ctx.reply(text, parse_mode = 'MarkdownV2')
})
bot.command('donate', ctx => {
    ctx.reply('So you want to donate? Amazing! It took alot of work for my creator to get me where I am now - so if you have some money to spare, and want to show your support; Donate! After all, server fees dont pay themselves - so every little helps! All donation money goes straight to funding the VPS, and of course boosting morale - always nice to see my work appreciated:)\n\nYou can donate on M-PESA here,\nor PAYPAL ,<a>here</a>.\n\nIf you want tp help support me monthly basis,you can set up recurring donation on Github Sponsors.\n\nThank you for your generosity!')
})
bot.command('help', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Help\n\nHey there! My name is Kaku. I\'m a group manager bot ,here to help you get around and keep the order in you groups!\nI have lots ofhandy features such as flood control, a warnig system, a note keeping system, and even predetermined replies on certain keywords.\n\n**Helpful commands**\n-/start:Start me! You\'ve probably already used this.\n-/help:Sends this message;I\'ll tell you more about myself!\n/donate:Gives you info on how to support me and my creator.\n\nIf you have any bugs or questions on how to use me have a look at my website, or head to @KakuSupportChannel.\nAll commands can be used with following:/!', {
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
            ]
        }
    })
})

bot.command('privacy', ctx => {
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
            ]
        }
    })
})


bot.hears('hello', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Welcome to Kakuu, How can we help you today?', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'orders', callback_data: 'orders' },
                ],
                [
                    { text: 'feedback', callback_data: 'feedback' },
                ],
                [
                    { text: 'help', callback_data: 'help' },
                ]
            ]
        }
    })
})


// Keyboard layout for requesting phone number and location
const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};

const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My location",
                request_location: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }

}

// ordering block
bot.action('orders', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);

})

bot.on("contact", (ctx) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard);
})

bot.hears("location", (ctx) => {
    console.log(ctx.from)
    let priceMessage = `click one option that you prefer`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "food", callback_data: 'food' },
                    { text: "drinks", callback_data: 'drinks' }
                ],

            ]
        }
    })
})
bot.hears('!pin', ctx => {
    ctx.reply("Pinned", Extra.markup(Markup.inlineKeyboard(
        [Markup.urlButton('⌨️ GitHub', 'https://github.com/khuzha/chatadmin')]
    ))
        .inReplyTo(ctx.message.message_id).HTML())
})
bot.hears('hi', (ctx) => ctx.reply("Hey There!", Extra.inReplyTo(ctx.message.message_id)));
bot.action('food', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/food.png" })

})

bot.action('drinks', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/drinks.png" })

})

bot.hears('001', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 350`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('002', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 450`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('003', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 500`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('004', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 600`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('pine', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('apple', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('berry', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.hears('orange', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 350`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})
bot.hears('mango', ctx => {
    console.log(ctx.from)
    let priceMessage = `Great, Your total pay will be kes 100`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "pay on delivery", callback_data: 'delivery' },
                    { text: "Mobile money", callback_data: 'mobile' }
                ],

            ]
        }
    })
})

bot.action('delivery', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Thank you for buying with us, our rider will be there in a moment please make sure you have the right amount with you to avoid imconvienience.Enjoy your delicacies ,hope to see you soon!', {

    })
})

bot.action('mobile', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'please reply with the transcation code here, starting with MPESA or AIRTEL MONEY. The paybill number is 098098 account number is your name', {

    })
})

bot.hears(['MPESA', 'AIRTEL MONEY'], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Thank you for buying with us.Enjoy your delicacies, hope to see you soon!', {})
})

//help block
bot.action('help', ctx => {
    console.log(ctx.from)
    let priceMessage = `please choose one option that you prefer`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "TENDER", callback_data: 'TENDER' },
                    { text: "VACANCY", callback_data: 'VACANCY' }
                ],

                [
                    { text: "Back to Menu", callback_data: 'hello' },
                ],
            ]
        }
    })
})

bot.action('VACANCY', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/vacancy.png" })

})

bot.action('TENDER', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/tender.png" })

})
//feedback block

bot.action('feedback', ctx => {
    console.log(ctx.from)
    let priceMessage = `click one option that you prefer`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "bot", callback_data: 'Bot' },
                    { text: "Restaraunt", callback_data: 'Restaraunt' }
                ],

                [
                    { text: "Back to Menu", callback_data: 'hello' },
                ],
            ]
        }
    })
})
bot.action('Bot', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Please reply  here to tell us ow we can improve this bot.', {

    })
})
bot.action('Restaraunt', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Please reply here to tell us how we can improve the services of our restaurant.', {

    })
})
bot.hears('MENU', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, { source: "res/food.png" })

})

bot.launch();
