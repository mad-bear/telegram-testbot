var telegram = require('telegram-bot-api');

var api = new telegram({
        token: '376731137:AAEQdPZdUaPhQsL_4X02r5VPmfe2KyGTreE',
        updates: {
        	enabled: true
    }
});

api.on('message', function(message)
{
    // Received text message
    // if(message.chat.id == 216029435){
    //   api.sendMessage({
    //   	chat_id: 1499005107,
    //   	text: message.text
    //   });
    // }
    // if(message.chat.id == 1499005107){
      api.sendMessage({
      	chat_id: message.chat.id,
      	text: message.text
      });
    // }
    console.log(message);
});

api.on('inline.result', function(message)
{
    // Received chosen inline result
    console.log(message);
});


//376731137:AAEQdPZdUaPhQsL_4X02r5VPmfe2KyGTreE
// 216029435
//1499005107
