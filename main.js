const {app,BrowserWindow} = require('electron');
var path = require('path');
let mainWindow = null;
const client = require('discord-rich-presence')('479737232413032479');
 

app.on('ready', () =>{
    mainWindow = new BrowserWindow({frame: false,width: 900, height: 600, icon: path.join(__dirname, '/icon.png')});
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/index.html');


    client.updatePresence({
        state: 'Editing Codes',
        //details: 'JavaScript',
        largeImageKey: 'iconfundo',
        largeImageText: 'NuloEditor',
        //smallImageKey: 'js',
        //smallImageText: 'JavaScript',
        instance: true,
      });
});
