const Discord = require('discord.js')
const Command = require('./command')
const prefix = 'd?'

module.exports = class Role extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'role')
	}

	static action(message) {

		//Add role
		if (message.content.startsWith(prefix + 'role -dev')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Développeur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Développeur", "Role Développeur ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith(prefix + 'role -youtubeur')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Youtubeur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Youtubeur", "Role Youtubeur ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith(prefix + 'role -hacker')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Hacker'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Hacker", "Role Hacker ajouté avec succès")
			message.channel.send(embed)

		}  else if(message.content.startsWith(prefix + 'role -graphiste')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Graphiste'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Graphiste", "Role Graphiste ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith(prefix + 'role -gamer')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Gamer'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Gamer", "Role Gamer ajouté avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith(prefix + 'role -streamer')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Streamer'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Streamer", "Role Streamer ajouté avec succès")
			message.channel.send(embed)

		}





		//Remove role
		if (message.content.startsWith(prefix + 'role --dev')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Développeur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Développeur", "Role Développeur retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith(prefix + 'role --youtubeur')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Youtubeur'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Youtubeur", "Role Youtubeur retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith(prefix + 'role --hacker')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Hacker'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Hacker", "Role Hacker retiré avec succès")
			message.channel.send(embed)

		}  else if(message.content.startsWith(prefix + 'role --graphiste')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Graphiste'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Graphiste", "Role Graphiste retiré avec succès")
			message.channel.send(embed)

		} else if(message.content.startsWith(prefix + 'role --gamer')) {

			message.member.removeRole(message.member.guild.roles.find('name', 'Gamer'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Gamer", "Role Gamer retiré avec succès")
			message.channel.send(embed)

		
		} else if(message.content.startsWith(prefix + 'role --streamer')) {

			message.member.addRole(message.member.guild.roles.find('name', 'Streamer'));

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.addField("Role Streamer", "Role Streamer retiré avec succès")
			message.channel.send(embed)

		}


	}
}
