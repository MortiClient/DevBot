const Discord = require('discord.js')
const bot = new Discord.Client()
//Préfixe
const prefix = 'd?'
//Classes command
const Google = require('./commands/google')
const Blague = require('./commands/blague')
const Role = require('./commands/role')
const Whatis = require('./commands/whatis')
const Docs = require('./commands/docs')
const Say = require('./commands/say')
const Clear = require('./commands/clear')
//Librairie
const moment = require('moment')

let args = message.content.split(" ").slice(1);




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

	Say.parse(message)

	Clear.parse(message)

	if(message.content === prefix + 'help') {

		
		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Toutes les commandes du bot", "d?google [une recherche]\nFaire une recherche google et obtenir le lien de la recherche\n\nd?stats\nToutes les informations a savoir sur le serveur\n\nd?blague\nLe bot t'affiche une blague\n\nd?role -[ex: dev] ou d?role --[ex: dev] pour retirer le role\nCommande qui permet d'ajouter ou de retirer un role pour voir tous les roles dispos entrer la commande d?all_roles\n\nd?all_roles\nCommande qui permet d'afficher tous les roles disponibles\n\nd?profil\nCommande qui permet de voir son profil\n\nd?gitdevbot\nCommande qui permet d'obtenir le lien du github du bot\n\nd?apropos\nCommande pour connaitre quelques informations a propos du bot\n\nd?doc\nCommande qui permet d'obtenir le lien de docs de languages de programmation (ou pas)\n\nd?say [message]\nCommande qui permet au bot de repeter ce que tu as ecris")
		message.channel.send(embed).catch(console.error)


	} else if(message.content === prefix + 'stats') {
				
		
		var date_moment = moment(message.guild.createdAt)
		date_moment = date_moment.locale('fr')

		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField('Statistiques du serveur DevHack', 'Il y a actuellement ' + '**' + message.guild.channels.size + '**' +' channels dans ce serveur \nIl y a exactement ' + '**' + message.guild.members.size + '**' + ' membres dans ce serveur\nLe serveur a été crée le: ' + '**' + date_moment.format('DD MMM YYYY') + '** \nJe suis present dans ' + '**' + bot.guilds.size + '**' + ' serveurs')
		message.channel.send(embed).catch(console.error)

	
	}  else if(message.content === prefix + 'all_roles') {

		
		var embed = new Discord.RichEmbed()
		.setColor("#226666")
		.addField("Tous les roles disponibles", "-Développeur ->  d?role -dev\n-Youtubeur ->      d?role -youtubeur\n-Hacker ->           d?role -hacker\n-Graphiste ->      d?role -redacteur\n-Front-end ->      d?role -frontend\n-Back-end ->      d?role -backend\n-Full-stack ->      d?role -fullstack\n-Gamer->           d?role -gamer")
		message.channel.send(embed).catch(console.error)


	} else if(message.content === prefix + 'gitdevbot') {

		message.reply('Voila le repos github du bot DevBot: https://github.com/mortim59/DevBot/')

	}  else if(message.content === prefix + 'apropos') {

		
		var embed = new Discord.RichEmbed()
			.setColor("#226666")
			.setDescription("Le développeur du bot: **Mortim**\nSite web: https://devhack.fr.nf\nHébergeur: **Heroku**\nTwitter: https://twitter.com/karim_uchiwa")
			.setFooter('A propos du bot')
			message.channel.send(embed).catch(console.error)

		
	}  else if(message.content === prefix + 'profil') {
		
		
		var date_moment = moment(message.author.createdAt)
		date_moment = date_moment.locale('fr')
		
		
		var embed = new Discord.RichEmbed()
		.setColor("#226666")		
		.addField("Voici votre profil: ", "Pseudo: **" + message.author.username + "**\nIdentifiant: **" + message.author.id + "**\nStatut: **"  + message.author.presence.status + "**\nCe compte a été crée le **" + date_moment.format('DD MMM YYYY') + "**")
		.setFooter('Les meilleurs profils de DevBot')
		.setThumbnail(message.author.avatarURL)
		message.channel.send(embed).catch(console.error)

		
	} 
 	
});


bot.login(process.env.TOKEN);
