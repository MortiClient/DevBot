const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Blague = require('./commands/blague')
const Role = require('./commands/role')
const Whatis = require('./commands/whatis')
const Docs = require('./commands/docs')
const moment = require('moment')
var i = 0;




bot.on('ready', function() {

	console.log('Bot connecté')
	bot.user.setGame('coder du sale | d?help').catch(console.error)
	
})


//guildMemeberAdd
bot.on('guildMemberAdd', function(member) {

	member.guild.channels.find("name", "general").sendMessage(member.toString() + ' Bienvenue dans le serveur ' + '**' + member.guild.name + '**' + ' utilisez la commande d?all_roles pour les roles que vous souhaitez ajouter, *__n\'oubliez pas de lire le reglement__*');

	member.addRole(member.guild.roles.find("name", "Membre"));

})


//Message
bot.on('message', function(message) {
	
	Google.parse(message)

	Blague.parse(message)

	Role.parse(message)

	Whatis.parse(message)

	Docs.parse(message)

	if(message.content === 'd?help') {

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Toutes les commandes du bot", "d?google [une recherche]\nFaire une recherche google et obtenir le lien de la recherche\n\nd?stats\nToutes les informations a savoir sur le serveur\n\nd?blague\nLe bot t'affiche une blague\n\nd?role -[ex: dev] ou d?role --[ex: dev] pour retirer le role\nCommande qui permet d'ajouter ou de retirer un role pour voir tous les roles dispos entrer la commande d?all_roles\n\nd?all_roles\nCommande qui permet d'afficher tous les roles disponibles\n\nd?whatis [front-end, back-end ou full-stack]\nCommande qui permet de savoir la signification de front-end, back-end ou full-stack\n\nd?game [phrase pour savoir si elle est vraie ou fausse\nCommande pour lancer le jeu vrai ou faux\n\nd?gitdevbot\nCommande qui permet d'obtenir le lien du github du bot\n\nd?apropos\nCommande pour connaitre quelques informations a propos du bot\n\nd?doc\nCommande qui permet d'obtenir le lien de docs de languages de programmation (ou pas)\n\nd?say [message]\nCommande qui permet au bot de repeter ce que tu as ecris")
		message.channel.send(embed).catch(console.error)

	} else if(message.content === 'd?stats') {
				
		var date_moment = moment(message.guild.createdAt)
		date_moment = date_moment.locale('fr')

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField('Statistiques du serveur DevHack', 'Il y a actuellement ' + '**' + message.guild.channels.size + '**' +' channels dans ce serveur \nIl y a exactement ' + '**' + message.guild.members.size + '**' + ' membres dans ce serveur\nLe serveur a été crée le: ' + '**' + date_moment.format('DD MMM YYYY') + '** \nJe suis present dans ' + '**' + bot.guilds.size + '**' + ' serveurs')
		message.channel.send(embed).catch(console.error)
	
	}  else if(message.content === 'd?all_roles') {

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Tous les roles disponibles", "-Développeur ->  d?role -dev\n-Youtubeur ->      d?role -youtubeur\n-Hacker ->           d?role -hacker\n-Graphiste ->      d?role -redacteur\n-Front-end ->      d?role -frontend\n-Back-end ->      d?role -backend\n-Full-stack ->      d?role -fullstack\n-Gamer->           d?role -gamer")
		message.channel.send(embed).catch(console.error)

	} else if(message.content.startsWith('d?game')) {

		let randnum_game = Math.floor(Math.random() * 2)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Vrai :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Faux :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)
		}
	} else if(message.content === 'd?gitdevbot') {
		message.reply('Voila le repos github du bot DevBot: https://github.com/mortim59/DevBot/')
	}  else if(message.content === 'd?apropos') {

		var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Le développeur du bot: **Mortim**\nSite web: https://devhack.fr.nf\nHébergeur: **Heroku**\nTwitter: https://twitter.com/karim_uchiwa")
			.setFooter('A propos du bot')
			message.channel.send(embed).catch(console.error)
		
	} else if(message.content === 'd?rankMikado') {
		
		var userMikado = bot.users.get("301913733536415755")
		var pointsMikado = -4000

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField(message.author.username +  " s'interresse au magnifique rank de " + userMikado.username + " l'esclave", "Métier: **esclave**\nPoints: **" + pointsMikado + "** points\nGrade: **esclave expert**")
		.setFooter('Les meilleurs ranks de DevBot lel')
		.setThumbnail(userMikado.avatarURL)
		message.channel.send(embed).catch(console.error)
		
	} else if(message.content === 'd?addPointsMikado') {
		if(message.author.id == '312932626337890304') {
			pointsMikado = pointsMikado + 1000
			
			var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription('Les 1000 points ont été ajoutés avec succès :D')
			message.channel.send(embed).catch(console.error)
			
		} else {
			message.channel.send('Seul le chef a acces a cette commande :/')
		}
		
		
	} else if(message.content.startsWith('d?say')) {
		
		let args = message.content.split(" ").slice(1);
		
		message.delete()
		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.setDescription("**" + message.author.username + "**" + " a dit: " + " " + args.join(" "))
		message.channel.send(embed)
		
	} 
 	
});


bot.login(process.env.TOKEN);
