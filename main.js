const Discord = require("discord-user-bots");
const {generateConversation} = require("./conversation_generator.js")
const {botConfigs, CHANNEL_ID, CHANNEL_ID_TESTBOT, topics, randomDelay} = require("./config.js");


class AIBot {
    constructor(botConfig) {        
        this.name = botConfig.name;
        this.client = new Discord.Client();
        this.client.login(botConfig.token);
    }
}

const names = botConfigs.map(botConfig => botConfig.name);
const bots = botConfigs.map(botConfig => new AIBot(botConfig));

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

async function ensureAllBotsReady(bots) {
    const readyPromises = bots.map(bot => {
        return new Promise(resolve => {
            bot.client.on('ready', () => {
                console.log(`${bot.name} is ready!`);
                resolve();
            });
        });
    });

    await Promise.all(readyPromises);
    console.log('All bots are ready!');
}


ensureAllBotsReady(bots).then(async () => {
    var  remainingTime = 0;
    while (true) {
        
        console.log(remainingTime);
        
        if (remainingTime > 0) {
            console.log(`Next conversation in ${Math.ceil(remainingTime / 3600)} hours, ${Math.ceil((remainingTime % 3600) / 60)} minutes.`);
            await new Promise(resolve => setTimeout(resolve, 60000)); // Update every minute
            remainingTime -= 60; // Decrease by 1 minute
            continue
        }

        const conversation = await generateConversation(names, topics[Math.floor(Math.random() * topics.length)], 6);

        // Iterate through the conversation and send messages to the Discord channel
        for (const entry of conversation) {
            if (entry.type === 'chat') {
                const bot = bots.find(bot => bot.name === entry.user);
                if (bot) {
                    console.log(`${bot.name} - ${entry.content}`);
                    bot.client.send(CHANNEL_ID, {content: entry.content});
                }
            } else if (entry.type === 'delay') {
                await new Promise(resolve => setTimeout(resolve, entry.time * 1000));
            }
        }

        remainingTime = randomDelay();

    }
});
