const Discord = require("discord.js")
const bot = new Discord.Client({disableMentions: 'everyone', intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGE_TYPING", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGES" ] })
const config = require("./config.json")
const { MessageEmbed } = require('discord.js');

bot.on("ready", () => {
    console.log("---------|-Matei bot is on-|---------")
    //bot.channels.cache.get("922190839273377812").send("Matei Bot is now on duty!")
    bot.user.setActivity('!help')
});
/*
bot.on('typingStart', (channel, user) => {
    const prosti = 244859064184471563
    if (prosti.includes(user.id)) {
    message.channel.send('scrie un admin');
    }
  });*/


bot.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    if (command === "help") {
        message.react("🆗")
        message.channel.send("Salut!! Tasteaza `\`!fun\`` pentru comenzile de divertisment, `\`!admin\`` pentru comenzile de administrare, `\`!samp\`` pentru comenzi legate de samp, si `\`!info\`` pentru detalii!").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        message.react("✅")
        console.log("---------Help command has been used.---------")
    }


    if (command === "fun") {
        message.react("🆗")
    const funEmbed = new Discord.MessageEmbed()
        .setTitle('For Fun commands')
        .addField(`\`!bully\``, `scandalul suprem`)
        .addField(`\`!size\``, `vezi cat de mare o ai ;)`)
        .addField(`\`!avatar\``, `vezi avatarul cuiva`)
        .addField(`\`!rps\``, `Piatra hartie foarfeca cu mine!`)
        .addField(`\`-------\``, `--`)
        .addField(`\`!marry\``, `Te casatoresti`)
        .addField(`\`!divorce\``, `Divortezi`)
        .addField(`\`-------\``, `--`)
        .addField(`\`!love\``, `Te potrivesti cu el/ea??`)
        .addField(`\`!ctw\``, `Best cheat you can get!`)
        .addField(`\`!brb\``, `O sa ai ca nickname be right back.`)
        .addField(`\`!brboff\``, `Revii la numele initial!`)
    message.channel.send({embeds: [funEmbed] }).then(msg => {
        setTimeout(() => msg.delete(), 10000)
    }) 
    } 
    if (command === "ctw") {
        message.react("🆗")
        message.channel.send("https://cheats.tw")
        message.channel.send("Best samp cheat you can buy!")
        message.react("✅")
    }

    if (command === "brb") {
        if (message.member.roles.cache.has(config.casatorit)) return message.channel.send("Esti casatorit, nu am cum sa iti modific numele.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        const user = message.author
        const nick = message.author.username
        message.member.setNickname(`be right back (${nick})`)
        message.channel.send('You are BRB from now!').then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
    }

    if (command === "brboff") {
        if (message.member.roles.cache.has(config.casatorit)) return message.channel.send("Esti casatorit, nu am cum sa iti modific numele.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        const user = message.author
        const nick = message.author.username
        message.member.setNickname("")
        message.channel.send('You are not BRB anymore!').then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
    }


    if (command === "samp") {
        message.react("🆗")
        const sampEmbed = new Discord.MessageEmbed()
                .setTitle('SAMP commands')
                .addField(`\`bugged\``, `Vezi conturi in panel pe bugged, !bugged <numelecontului>`)
                .addField(`\`ruby\``, `Vezi conturi in panel pe nephrite, !ruby <numelecontului>`)
                .addField(`\`top\``, `Vezi turfurile pe bugged`)
            message.channel.send({embeds: [sampEmbed] }).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        }

    if (command === "admin") {
        message.react("🆗")
    const admEmbed = new Discord.MessageEmbed()
        .setTitle('Administrators commands')
        .addField(`\`ping\``, `Verifica ping-ul bot-ului.`)
        .addField(`\`kick\``, `Usage: **${config.prefix}kick [@User]**\n**${config.prefix}kick [@User][Reason]**`)
        .addField(`\`ban\``, `Usage: **${config.prefix}ban [@User]**\n**${config.prefix}ban [@User][Reason]**`)
        .addField(`\`add\``, `Adauga un rol unui user \nUsage: **${config.prefix}add [@User] [Role]**`)
        .addField(`\`remove\``, `Elimina un rol unui user \nUsage: **${config.prefix}remove [@User] [Role]**`)
        .addField(`\`purge\``, `Sterge un numar de mesaje intre 2 si 100 \nUsage: **${config.prefix}purge [number]**`)
        .addField(`\`say\``, `comanda de vorbit`)
    message.channel.send({embeds: [admEmbed] }).then(msg => {
        setTimeout(() => msg.delete(), 10000)
    })

    if (command === "info") {
        message.react("🆗")
        message.channel.send("Bot pentru divertisment, comenzi basic, creat de @Matei#2785").then(msg => {
            setTimeout(() => msg.delete(), 10000)
    })
    
    }
}

    
    if (command === "ping") {
        message.react("🆗")
        const user = message.author
        message.channel.send(`Pong **(${Date.now() - message.createdTimestamp}ms)**   |requested by ${user}`)
        message.react("✅")
        console.log(`---------Ping command has been used by ${user}.---------`)
    }

    if (command === "kick") {
        message.react("🆗")
        if (!message.member.roles.cache.has(config.modrole)) return message.channel.send("Nu ai rolul necesar pentru a folosi comanda!.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        if(!message.member.permissions.has('Permissions.FLAGS.KICK_MEMBERS'))
        message.channel.send("Insufficient permissions (Requires permission `Kick members`)").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        const member = message.mentions.members.first();
        let user = message.author;
        bot.channels.cache.get(config.logchannel).send(`>> LOGS: <@${user.id}> a folosit comanda kick pe ${member}.`)
        console.log(`---------Kick command has been used.---------`)
        if (!member)
            return message.channel.send("Cui vrei sa dai kick? Imi spui?").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        if (!member.kickable)
            return message.channel.send("Nu poti sa-l scoti pe asta.").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.kick().then(member => {
                message.channel.send(`${member.user.tag} was kicked, no reason was provided`);
                message.react("✅")
            })

            if (reason) return member.kick().then(member => {
            })
        }
    }

    if (command === "ban") {
        message.react("🆗")
        if (!message.member.roles.cache.has(config.modrole)) return message.channel.send("Nu ai rolul necesar pentru a folosi comanda!.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        if(!message.member.permissions.has('Permissions.FLAGS.BAN_MEMBERS'))
    message.channel.send("Insufficient permissions (Requires permission `Ban members`)").then(msg => {
        setTimeout(() => msg.delete(), 10000)
    })
        const member = message.mentions.members.first();
        if (!member)
            return message.channel.send("Pe cine?").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        if (!member.bannable)
            return message.channel.send("Nu-l poti bana pe asta.").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        let user = message.author;
        const reason = args.slice(1).join(" ")
        if (member) {
            if (!reason) return member.ban().then(member => {
                message.channel.send(`${member.user.tag} was banned, no reason was provided`);
            })

            if (reason) return member.ban().then(member => {
                message.channel.send(`${member.user.tag} was banned for ${reason}`);
                message.react("✅")
                bot.channels.cache.get(config.logchannel).send(`>> LOGS: <@${user.id}> a folosit comanda ban pe ${member}, reason ${reason}.`)
                console.log(`---------Ban command has been used by ${user}.---------`)
            })
        }
    }

    if (command === "add") {
        message.react("🆗")
        message.react("✅")
        if (!message.member.roles.cache.has(config.modrole)) return message.channel.send("Nu ai rolul necesar pentru a folosi comanda!.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        if(!message.member.permissions.has('Permissions.FLAGS.MANAGE_ROLES'))
        message.channel.send("Insufficient permissions (Requires permission `Manage roles`)").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        const add = args.slice(1).join(" ")
        if (!add)
            return message.channel.send("You have not specified a role").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        const roleAdd = message.guild.roles.cache.find(role => role.name === add)
        if (!roleAdd)
            return message.channel.send("This role does not exist").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        if (member.roles.cache.get(roleAdd.id))
            return message.channel.send(`This user already has the ${add} role`).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        member.roles.add(roleAdd.id).then((member) => {
            message.channel.send(`${add} added to ${member.displayName}`)
            let user = message.author;
           /* bot.channels.cache.get(config.logchannel).send(`>> LOGS: <@${user.id}> a folosit comanda add pe ${member} si i-a adaugat: ${add}.`)*/
            console.log("---------ADD command has been used.---------")
        })
    }

    if (command === "remove") {
        message.react("🆗")
        message.react("✅")
        if (!message.member.roles.cache.has(config.modrole)) return message.channel.send("Nu ai rolul necesar pentru a folosi comanda!.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        if(!message.member.permissions.has('Permissions.FLAGS.MANAGE_ROLES'))
        message.channel.send("Insufficient permissions (Requires permission `Manage roles`)").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        const member = message.mentions.members.first()
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        const remove = args.slice(1).join(" ")
        if (!remove)
            return message.channel.send("You have not specified a role").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        const roleRemove = message.guild.roles.cache.find(role => role.name === remove)
        if (!roleRemove)
            return message.channel.send("This role does not exist").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        if (!member.roles.cache.get(roleRemove.id))
            return message.channel.send(`This user does not have the ${remove} role`).then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        member.roles.remove(roleRemove.id).then((member) => {
            message.channel.send(`${remove} removed from ${member.displayName}`)
            let user = message.author;
            /*bot.channels.cache.get(config.logchannel).send(`>> LOGS: <@${user.id}> a folosit comanda remove pe ${member} si i-a scos: ${remove}.`)*/
            console.log("---------Remove command has been used.---------")
        })
    }

    if (command === "avatar")  {
        message.react("🆗")
        message.react("✅")
        let user = message.mentions.users.first() || message.author;
        const avatarEmbed = new MessageEmbed()
          .setColor(0x333333)
          .setAuthor(`${user.username}'s Avatar`)
          .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`);
          message.channel.send({ embeds: [avatarEmbed] });
          bot.channels.cache.get(config.logchannel).send(`>> LOGS: <@${user.id}> a folosit comanda avatar.`)
          console.log("---------Avatar command has been used.---------")

    }

    if (command === "prost")  {
        message.react("🆗")
        let role = message.guild.roles.cache.find(r => r.id === "922595161006014474");
        const member = message.mentions.users.first()
        if (!message.member.roles.cache.has(config.modrole)) return message.channel.send("Nu ai rolul necesar pentru a folosi comanda!.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        if (!member)
            return message.channel.send("You have not mentioned a user").then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })        
       message.guild.roles.fetch('922595161006014474')
       .then(role => {
               console.log(`The role color is: ${role.color}`);
               console.log(`The role name is: ${role.name}`);
               let member = message.mentions.members.first();
               member.roles.add(role).catch(console.error);
               message.channel.send(`${member} felicitari, esti un prost devotat, si ti-am dat si rol pentru asta! fii sanatos!`)
                bot.channels.cache.get(config.diplome).send(`${member} este acum un prost devotat! Felicitari!`)
               
           })
       .catch(console.error);
        }

    if (command === "bataie") {
    message.react("🆗")
    message.react("✅")
    const text = args.join()
    const tll = message.author
    const duelu = message.mentions.users.first()
    const options = [
        `${tll} i-a futut un pumn lui ${duelu}`,
        `${duelu} cu un croseu de dreapta la pus in fund pe ${tll}`,
        `${duelu} ii da un picior lui ${tll}`,
        `${duelu} ii da cu capul in gura lui${tll}`

    ]
    const options2 = [
        `${tll} in final l-a prins pe ${duelu} pe la spate si l-a facut KO.`,
        `${tll} cu un picior la nivelul capului, reuseste sa il faca praf pe ${duelu}`,
        `dupa un lung duel, ${duelu} il rupe in bataie pe ${tll}`,
        `${duelu} o frontala de dreapta si a reusit sa il puna la pamant pe ${tll}`
    ]
    const option = options[Math.floor(Math.random() * options.length)]
    const option2 = options2[Math.floor(Math.random() * options.length)]
    message.channel.send(`${option}`)
    message.channel.send(`Urmarim cu atentie bataia dintre ${tll} si ${duelu}...`).then 
    setTimeout(function(){
        message.channel.send(`${option2}`); 
    }, 5000);
}


    if (command === "say") {
        message.react("🆗")
        message.react("✅")
        const text = args.join(" ")
        if (!message.member.roles.cache.has(config.modrole)) return message.channel.send("Nu ai rolul necesar pentru a folosi comanda!.").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        if(!text) return message.channel.send("Ce vrei sa spun?").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
        message.channel.send(text)
        let user = message.author;
        /*bot.channels.cache.get(config.logchannel).send(`>> LOGS: <@${user.id}> a folosit comanda say si a spus: ${text}.`)*/
        console.log("---------Say command has been used.---------")
    }


    if (command === "purge") {
        if(!message.member.permissions.has('Permissions.FLAGS.MANAGE_MESSAGES')) message.channel.send("Nu ai acces (trebuie sa ai permisiunea `Manage messages`)").then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })
    const number = args.join(" ")
    if(!number) return message.channel.send("You haven't specified a number to purge").then(msg => {
        setTimeout(() => msg.delete(), 10000)
    })
   message.channel.bulkDelete(number).catch(console.error)
   let user = message.author;
   console.log("---------Purge command has been used.---------")
   /*bot.channels.cache.get(config.logchannel).send(`>> LOGS: <@${user.id}> a folosit comanda purge si a sters ${number} mesaje.`)*/
   }
     
   if (command === "rps") {
    message.react("🆗")
        const options = [
            "piatra :shell: ",
            "hartie :newspaper2:",
            "foarfeca :scissors: "
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`Am dat ${option}`)
        message.react("✅")
    }

    if (command === "bully") {
        message.react("🆗")
        const text = message.mentions.users.first()
        const john = message.author
        if(!text) return message.channel.send("Dar pe cine vrei sa injur? Pe mamica ta? Zic si eu sa imi spui!")
        const options = [
            `${text} Esti un caz pierdut, iti doresc un ajutor social pe masura nevoilor tale!`,
            `${text} Sit dog, hingherii sunt pe drum`,
            `${text} Daca as fi tu, mi-as dori sa fiu eu`,
            `${text} Esti atat de prost ca nici maicata nu te suporta`,
            `${text} Curva de duminica mi-a zis ca are un copil, dar nu mi-a zis ca esti tu`,
            `${text} Mai baga o fisa!`,
            `${text}, ${john} iti da lectii la orice ora bai sclav aurolac ce esti`,
            `${text} 7x6 repede bai asta`,
            `${text} iti ard una te las inconstient`,
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`${option}`)
        message.react("✅")
    }
   /* if (command === "react") {
        const john = message.author
        const text = "927327573430644756"
        let channel = message.mentions.channels.first()
        if(!text) return message.channel.send("Specifica id-ul mesajului!")
        channel.messages.fetch(`${text}`).react("👍")
        }

    if (command === "bet") {
        const john = message.author
        const options = [
            `era alb`,
            `era negru`
        ]
        message.channel.send("Jucam alba neagra, alege una din doua:")
        message.react('⚪')
        message.react('⚫')
        const option = options[Math.floor(Math.random() * options.length)]
        if (Discord.MessageReaction.emoji === '⚪') {
        message.channel.send(`${option}`)
        if (Discord.MessageReaction.emoji === '⚫') {
            message.channel.send(`${option}`)
        }
    }
    
}*/


if (command === "top") {
    message.react("🆗")
    message.channel.send("Los aztecas: 54 turfs")
    message.react("✅")
}

    if (command === "size") {
        message.react("🆗")
        const john = message.author
        const options = [
            `8===D`,
            `8======D`,
            `8=D`,
            `8=====================D`,
            `8==========D`,
            `8=======================D`,
            `8====D`,
            `Nu ai asa ceva`,
            `da cu minus coaie..`,
        ]
        if(message.member.roles.cache.has(config.craciunita)) return message.channel.send(`${john} draga mea.. asta ai tu: <>`)
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`${john} dick size is: ${option}`)
        message.react("✅")
    }

        if (command === "love") {
            message.react("🆗")
        const john = message.author
        const menti = message.mentions.users.first()
        const options = [
            `10% `,
            `20% `,
            `30%`,
            `40%`,
            `50%`,
            `60%`,
            `69%`,
            `80%`,
            `100%, facuti unul pentru altul sunteti!`,
        ]
        const option = options[Math.floor(Math.random() * options.length)]
        message.channel.send(`:heartbeat: ${john} te potrivesti cu ${menti} in proportie de ${option}!`)
        message.react("✅")
    }

    if (command === "marry") {
        message.react("❤️")

        if(!message.mentions.users.first()) return message.channel.send("`Trebuie sa dai mention persoanei iubite!`").then(msg => { // mention check
            setTimeout(() => msg.delete(), 10000) 
        })


        if(message.member.roles.cache.has(config.casatorit)) return message.channel.send("Esti deja casatorit! Obraznicie!!!!!") // verificare daca are rol casatorit


        const nume1 = message.author.username      // numele sotului
        const nume2 = message.mentions.users.first().username   //numele sotiei

        message.channel.send(`:heartbeat: ${nume1} tocmai s-a casatorit cu ${nume2}:heartbeat: `)
        message.member.setNickname(`${nume1} + ${nume2}`)
        bot.channels.cache.get(config.diplome).send(`> :heartbeat: ${nume1} este casatorit/a acum cu ${nume2}`)
        message.member.roles.add(message.member.guild.roles.cache.get(config.casatorit))

        const member = message.mentions.members.first()

        if (message.member.roles.cache.get(config.casatorit))
        return message.channel.send(`Vrei sa te casatoresti cu cineva luat deja??? Nu te las!`).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })

        message.member.setNickname(`${nume1} + ${nume2}`)
        message.member.roles.add(message.member.guild.roles.cache.get(config.casatorit))
        message.react("✅")
        }

    if (command === "divorce") {
        if(!message.mentions.users.first()) return message.channel.send("Da si tu mention la persoana cu care ai marry!")
        message.react("💔")

        const sotu = message.author.username      // numele sotului
        const maria = message.mentions.users.first().username  //numele sotiei

        if(!message.member.roles.cache.has(config.casatorit)) return message.channel.send("Nu esti casatorit!") // verificare daca nu are rol casatorit
        if(!sotu) return message.channel.send("`Trebuie sa dai mention persoanei pe care nu o mai iubesti!` :( ").then(msg => {
            setTimeout(() => msg.delete(), 10000) 
        })

        message.channel.send(`:heartbeat: ${sotu} tocmai s-a despartit de ${maria}:heartbeat: `)
        bot.channels.cache.get(config.diplome).send(`> ${sotu} a divortat acum de ${maria}`)
        message.member.setNickname("")
        message.member.roles.remove(message.member.guild.roles.cache.get(config.casatorit))

        const member = message.mentions.users.first()

        if (!message.member.roles.cache.get(config.casatorit))
        return message.channel.send(`Vrei sa divortezi de cineva care nu are sot/sotie??? Nu poti.`).then(msg => {
            setTimeout(() => msg.delete(), 10000)
        })

        message.member.setNickname("")
        message.member.roles.remove(message.member.guild.roles.cache.get(config.casatorit))
        message.react("✅")
    }

        if (command === "bugged") {
            message.react("🆗")
      const user = args.join(" ")
      if(!user) return message.channel.send("Trebuie sa imi spui numele contului,  ex. !bugged Matei")
      message.channel.send(`https://bluepanel.bugged.ro/profile/${user}`)
          message.react("✅")
    }

    if (command === "searchbugged") {
        message.react("🆗")
  const user = args.join(" ")
  if(!user) return message.channel.send("Trebuie sa imi spui numele contului,  ex. !bugged Matei")
  message.channel.send(`https://bluepanel.bugged.ro/search?name=${user}&_token=pVrMQpvRvQ2YKI8vetga5YpohM8IHGBWDidr1sWr`)
      message.react("✅")
}

    if (command === "ruby") {
        message.react("🆗")
        message.react("✅")
        const user = args.join(" ")
        if(!user) return message.channel.send("Trebuie sa imi spui numele contului,  ex. !ruby Matei")
        message.channel.send(`https://rubypanel.nephrite.ro/profile/${user}`)
      }
});


//anti spam 
/*
//Welcome & goodbye\\
bot.on('guildMemberAdd', member => {
    member.roles.add(member.guild.roles.cache.get(config.welcomeroles))
    const welcomeEmbed = new Discord.MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('**' + member.user.username + '** is here, with other **' + member.guild.memberCount + '** people')
    welcomeEmbed.setImage('https://th.bing.com/th/id/R.a5125797fb736d54eb42de644dbba9d8?rik=cZ4wYGNGk9NE8Q&pid=ImgRaw&r=0')

    member.guild.channels.cache.get(config.welcomechannel).send({ embeds: [welcomeEmbed] })
})

bot.on('guildMemberRemove', member => {
    const goodbyeEmbed = new Discord.MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('**' + member.user.username + '** left the server **' + member.guild.memberCount + '** left')
    goodbyeEmbed.setImage('https://pngimg.com/uploads/goodbye/goodbye_PNG1.png')

    member.guild.channels.cache.get(config.leavechannel).send({ embeds: [goodbyeEmbed] })
});*/


//anti ajutoare sociale
bot.on("message", (message) => {
    if (message.content.includes('salut')) {
        return message.reply('Ceau!');
    }
    if (message.content.includes("Noapte buna")) {
        return message.reply(`Seara frumoasa`);
    }
    if (message.content.includes("nb")) {
        return message.reply(`Seara Frumoasa`);
    }
    if (message.content.includes("cearta")) {
        return  message.reply(`ten plm`);
    }
    if (message.content.includes("nu merge")) {
        return message.reply(`esti tu prost`);
    }
    if (message.content.includes("mata")) {
        return  message.reply(`mă-ta prostule`);
    }
    if (message.content.includes("ma-ta")) {
        return message.reply(`tactu`);
    }
    if (message.content.includes("curva")) {
        return message.reply(`asa ii zice lui maicata, da`);
    }
    if (message.content.includes("pizda")) {
        return message.reply(`te fut`);
    }
    if (message.content.includes("pula")) {
        return message.reply(`o sugi`);
    }
    if (message.content.includes("ma ta")) {
        return  message.reply(`mă-ta prostule`);
    }
    if (message.content.includes("botu")) {
        return  message.reply(`taci coaie ca esti rupt in gura`);
    }
    if (message.content.includes("fmm")) {
        return  message.reply(`ba plebule, sa iti fut toti mortii si ranitii, biserica si altaru ca ti-oi fute una nu te mai ridici`);
    }
    if (message.content.includes("Fmm")) {
        return  message.reply(`ba plebule, sa iti fut toti mortii si ranitii, biserica si altaru ca ti-oi fute una nu te mai ridici`);
    }
    if (message.content.includes("pisamas")) {
        return  message.reply(`deschide gura sa ma pis`);
    }
    if (message.content.includes("Pisamas")) {
        return  message.reply(`deschide gura sa ma pis`);
    }
    if (message.content.includes("1 2 3")) {
        return  message.reply(`si de pulă sa ma iei`);
    }




});
    

bot.login('')


