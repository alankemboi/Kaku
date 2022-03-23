export default function donate() {
    ctx => {
        bot.telegram.sendMessage(ctx.chat.id, 'so you want to donate?Amazing!It took alot of work for my creator to get me where I am now - so if you have some money to spare, and want to show your support;Donate!After all,server fees dont pay themselves - so every little helps!All donation money goes straight to funding th VPS, and of course boosting morale - always nice to see my work appreciated:)\nYou can donate on M-PESA here,\nor PAYPAL here.\nIf you want tp help support me monthly basis,you can set up recurring donation on Github Sponsors.\nThank you for your generosity!')
    }
}