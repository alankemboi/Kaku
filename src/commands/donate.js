const { errorHandler, debug, defaultConfig } = require('@/helpers')
modules.exports = () => async (ctx) => {
    ctx.replyWithMarkdown('So you want to donate? Amazing! It took alot of work for my creator to get me where I am now - so if you have some money to spare, and want to show your support; Donate! After all, server fees dont pay themselves - so every little helps! All donation money goes straight to funding the VPS, and of course boosting morale - always nice to see my work appreciated:)\n\nYou can donate on M-PESA [here](https://www.github.com/alankemboi) \nor PAYPAL, [here](https://www.paypal.com).\n\nIf you want tp help support me monthly basis,you can set up recurring donation on [Github Sponsors](https://www.github.com/alankemboi).\n\nThank you for your generosity!', {
        disable_web_page_preview: true,
    }).catch(errorHandler)
}