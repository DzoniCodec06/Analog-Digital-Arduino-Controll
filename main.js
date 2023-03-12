const { app, BrowserWindow } = require("electron");

const WINDOW_WIDTH = 500;
const WINDOW_HEIGHT = 600;

const makeWindow = () => {
    const win = new BrowserWindow({
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        resizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            devTools: true,
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    win.loadFile("./index.html");

    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    makeWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) makeWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform != "darwin") app.quit();
});









