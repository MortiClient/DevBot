const Command = require('./command')
const prefix = 'd?'

module.exports = class FunGif extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'fungif')
	}

	static action(message) {

			let args = message.content.split(" ").slice(1);
		
			if (message.content.startsWith(prefix + 'fungif:ora')) {
				if(args == "") {
				   message.reply("Veuillez mentionner quelqu'un")
				} else {
				   message.reply('fait ORA ORA ORA ORA ORA à ' + args.join(" ") + " " + 'https://tenor.com/view/ora-starplatinum-jojosbizarreadventure-jojo-gif-5505650')
				}
				
			}
	}
}
