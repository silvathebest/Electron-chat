const { app, BrowserWindow, Notification } = require('electron')
const { ipcMain } = require('electron/main')
const path = require('path')

const isDev = !app.isPackaged

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')

    isDev && win.webContents.openDevTools()
}
if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}
app.whenReady().then(createWindow)

ipcMain.on('notify', (e, message) => {
    new Notification({ title: "new notification", body: message }).show()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})