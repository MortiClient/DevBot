const Discord = require('discord.js')
const Command = require('./command')
const prefix = 'd?'

module.exports = class FunGif extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'fungif')
	}

	static action(message) {

			let args = message.content.split(" ").slice(1)

			if (message.content === prefix + 'fungif') {

				var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.addField("Toutes les commandes fungif",  "-> d?fungif:ora\n-> d?fungif:pensativo\n-> d?fungif:issou\n-> d?fungif:flowey\n-> d?fungif:geass")
					message.channel.send(embed)


			} else if (message.content.startsWith(prefix + 'fungif:ora')) {
				
				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " fait ORA ORA ORA ORA ORA à " + args.join(" "))
					.setImage('https://media1.tenor.com/images/4795d34aa49ada5299453dfa9960ee40/tenor.gif')
					message.channel.send(embed)
				}

				
			} else if(message.content.startsWith(prefix + 'fungif:pensativo')) {                

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " est pensativo envers " + args.join(" "))
					.setImage('https://media1.tenor.com/images/304158e449ed30f175e8b67077c4c152/tenor.gif')
					message.channel.send(embed)
				}

				

			} else if(message.content.startsWith(prefix + 'fungif:issou')) {                   

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " est issou envers " + args.join(" "))
					.setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')
					message.channel.send(embed)
				} 

			} else if(message.content.startsWith(prefix + 'fungif:flowey')) {                   

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " terrifie " + args.join(" ") + " avec Flowey")
					.setImage('https://cdn.discordapp.com/attachments/375754450305941506/442007040446038036/tumblr_nwk6rtcmjP1uhzkrko1_1280.gif')
					message.channel.send(embed)
				} 

			} else if(message.content.startsWith(prefix + 'fungif:geass')) {                   

				if(args == "") {
					message.reply('Veuillez mentionner quelqu\'un')
				} else {
					var embed = new Discord.RichEmbed()
					.setColor("#226666")
					.setDescription("**" + message.author.username + "**" + " ordonne qu'il suive les ordres à " + args.join(" "))
					.setImage('https://78.media.tumblr.com/557fa46fbeddff94b07a15b32d570c57/tumblr_mwl398QgPA1rlox2ao1_500.gif')
					message.channel.send(embed)
				} 

			}
	}
}
