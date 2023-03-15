const Discord = require("discord.js")

module.exports = async (bot, message) => {

    let prefix = "!";

    let messageArray = message.content.split(" ")
    let commandeName = messageArray[0](prefix.length)
    let args = messageArray.slice(1)

    if(!message.content.starsWith(prefix)) return;

    let commande = require(`../commandes/${commandeName}`)
    if(!message) return message.reply("Y a pas de commande!")

    commande.run(bot, message, args)
    
}