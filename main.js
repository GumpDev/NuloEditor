const {app,BrowserWindow} = require('electron');
var path = require('path');
let mainWindow = null;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({frame: false,width: 900, height: 600, icon: path.join(__dirname, '/icon.png')});
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.webContents.openDevTools();
    
});
