const { Client, Intents } = require('discord.js');

require("dotenv").config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on("ready", () => {
    console.log(`Ingresando como ${client.user.tag}. Estoy listo!`)
  })

client.on("messageCreate", (message) =>{
  if (message.content == "hi"){
    message.reply("Hello world! uwu")
  }
})

client.login(process.env.TOKEN)













 

