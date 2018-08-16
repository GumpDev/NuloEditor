//WebScript
const {remote} = require('electron');
var app = require('electron').remote;
var dialog = app.dialog;
var fs = require('fs');

var filename = "";
var type = "";

function minimize(){
     var window = remote.getCurrentWindow();
     window.minimize(); 
}

function maximize(){
     var window = remote.getCurrentWindow();
     if (!window.isMaximized()) {
         window.maximize();          
     } else {
         window.unmaximize();
     }
}

function closeBtn(){
     var window = remote.getCurrentWindow();
     window.close();
}

function save(){
    if(filename == ""){
        dialog.showSaveDialog((fileName) =>{
            if(fileName == undefined){
                return;   
            }
        
            var content = myCodeMirror.getValue();

            fs.writeFile(fileName,content,(err)=>{
                if(err)console.log(err);
                filename = fileName;
                var num = fileName.split("\\").length - 1;
                document.getElementById('title').innerText = fileName.split("\\")[num];
                type = filename.split(".")[1];
            });
        });
    }else{
        var content = myCodeMirror.getValue();

        fs.writeFile(filename,content,(err)=>{
            if(err)console.log(err);
            contentcache = content;
            var num = filename.split("\\").length - 1;
            document.getElementById('title').innerText = filename.split("\\")[num];
            type = filename.split(".")[1];
            setInterval(verify,500);
        });
    }
}

function saveAs(){
    dialog.showSaveDialog((fileName) =>{
        if(fileName == undefined){
            return;   
        }
    
        var content = myCodeMirror.getValue();

        fs.writeFile(fileName,content,(err)=>{
            if(err)console.log(err);
        });
    });
}

function load(){
    dialog.showOpenDialog((fileNames) =>{
        if(fileName == undefined){
            return;   
        }else{
            readFile(fileNames[0]);
            document.getElementById('title').innerText = fileNames[0];
        }
    });
}

function readFile(filepath){
    fs.readFile(filepath,'utf-8',(err,data) =>{
        if(err){
            alert(err);
            return;
        }

        
    });
}

function verify(){
    if(filename != ""){
        var num = filename.split("\\").length - 1;
        document.getElementById('title').innerText = filename.split("\\")[num]+ "(unsaved)";
    }
}

function fileMenu(bool){
    var tabMenu = document.getElementById('menu1');
    if(bool){
        EditMenu(false);
        HelpMenu(false);
        tabMenu.style.zIndex = 5;
        tabMenu.style.opacity = 1;
    }else{
        tabMenu.style.zIndex = -2;
        tabMenu.style.opacity = 0;
    }
}

function EditMenu(bool){
    var tabMenu = document.getElementById('menu2');
    if(bool){
        fileMenu(false);
        HelpMenu(false);
        tabMenu.style.zIndex = 5;
        tabMenu.style.opacity = 1;
    }else{
        tabMenu.style.zIndex = -2;
        tabMenu.style.opacity = 0;
    }
}

function HelpMenu(bool){
    var tabMenu = document.getElementById('menu3');
    if(bool){
        fileMenu(false);
        EditMenu(false);
        tabMenu.style.zIndex = 5;
        tabMenu.style.opacity = 1;
    }else{
        tabMenu.style.zIndex = -2;
        tabMenu.style.opacity = 0;
    }
}

function quit(){
    window.close();
}

function hub(){
    window.location = "hub.html";
}