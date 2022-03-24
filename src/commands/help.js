const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const { errorHandler, debug, defaultConfig } = require('@/helpers')
modules.exports = () => async (ctx) => {
    ctx.reply('Help\n\nHey there! My name is Kaku. I\'m a group manager bot ,here to help you get around and keep the order in you groups!\nI have lots of handy features such as flood control, a warning system, a note keeping system, and even predetermined replies on certain keywords.\n\n**Helpful commands**\n-/start: Start me! You\'ve probably already used this.\n-/help: Sends this message; I\'ll tell you more about myself!\n/donate: Gives you info on how to support me and my creator.\n\nIf you have any bugs or questions on how to use me have a look at my website, or head to @KakuSupportChannel.\nAll commands can be used with following:/!', {
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
    }).catch(errorHandler)
}