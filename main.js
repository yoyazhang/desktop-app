const {app, BrowserWindow} = require('electron');
function createWindow(){
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,

        frame: false,
        icon: "../icon/clock.png",
        webPreferences:{
            backgroundThrottling: false,   //设置应用在后台正常运行
            nodeIntegration:true,     //设置能在页面使用nodejs的API
            contextIsolation: false,  //关闭警告信息
        }
    });
    // 让主进程加载一个index.html
    win.loadFile('index.html');
    // 打开开发者调试工具
    win.webContents.openDevTools();
    // 设置为永远是最顶层
    win.setAlwaysOnTop(true);
    // 监听窗口关闭事件
    win.on('closed',()=>{
        win = null;
    });
}
// 在ready事件触发后加载index页面
app.whenReady().then(createWindow);
//
