const { app, BrowserWindow } = require('electron')

const path = require('path')
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  awaitWriteFinish: true,
});

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // TODO: Run single instance.
  // https://stackoverflow.com/questions/35916158/how-to-prevent-multiple-instances-in-electron

  win.loadFile(path.join(__dirname, './public/index.html'));
}



app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})