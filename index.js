const DiscordRPC = require("discord-rpc");

/*

СЮДА ВСТАВЛЯЕТЕ

*/



const ClientID = '';

const rpc = new DiscordRPC.Client({ transport: 'ipc'});

const startTimestamp = new Date();

rpc.on('ready', () => {
    console.log("Ready.");
    rpc.setActivity({
//ПЕРВАЯ СТРОКа
      details: `Раенбов пишет сайты`,
//ВТОРАЯ СТРОКА
      state:`Ну, делает вид, что пишет`,

    startTimestamp,

    //КЛЮЧ ИЗОБРАЖЕНИЕ, ЭТО БОЛЬШЕ ИЗОБРАЖЕНИЕ

    largeImageKey: `logo`,
    //ТЕКСТ ИЗОБРАЖЕНИЯ
    largeImageText: `Do not disturb, please`,


// КЛЮЧ ИЗОБРАЖЕНИЯ, ЭТО МАЛОЕ ИЗОБРАЖЕНИе
    smallImageKey: `fox`,
    //ЭТО ТЕКСТ МАЛОГО ИЗОБРАЖЕНИЯ
    smallImageText: `Coding...`,
    });
});

rpc.login(ClientID).catch(console.error);
