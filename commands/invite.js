const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Want me in your server? Invite me today! \n\n [Invite Link](https://discord.com/api/oauth2/authorize?client_id=780688923496153138&permissions=8&scope=bot)`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=780688923496153138&permissions=8&scope=bot`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
