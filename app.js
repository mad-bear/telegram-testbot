var telegram = require('telegram-bot-api');

var api = new telegram({
        token: '<PUT YOUR TOKEN HERE>',
        updates: {
        	enabled: true
    }
});

api.on('message', function(message)
{
    // Received text message
    console.log(message);
});
