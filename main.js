const {app, BrowserWindow} = require('electron');
function createWindow(){
    let win = new BrowserWindow({
        width: 500,
        height: 600,
        title: "goose",
        transparent: true,// 透明窗口
        alwaysOnTop: true, // 总是在最前面
        // resizable: false,// 会导致不能拖动，所以不能用
        frame: false,
        icon: "icon/goose.png",
        webPreferences:{
            backgroundThrottling: false,   //设置应用在后台正常运行
            nodeIntegration: true, //设置开启nodejs环境
            contextIsolation: false,
            enableRemoteModule: true, //允许子进程调用主进程的api
            nativeWindowOpen:true,
            webgl:true,
            webSecurity: false
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

