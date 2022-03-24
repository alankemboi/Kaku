const { errorHandler, debug, defaultConfig } = require('@/helpers')
modules.exports = () => async (ctx) => {
    ctx.reply('Select one of the bellow options for more information about how the bot handles your privacy.', {
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
    }).catch(errorHandler)
}